const passopModel = require("../models/passopModels");
const { v4: uuidv4 } = require("uuid");
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 60 }); // 60 seconds cache

// Save Password
const savePassword = async (req, res) => {
  try {
    const { site, username, password } = req.body;
    if (!site || !username || !password || typeof password !== "string") {
      return res.status(400).json({ message: "All fields are required and password must be a string" });
    }

    const existing = await passopModel.findOne({ site, username });
    if (existing) {
      return res.status(409).json({ message: "This entry already exists." });
    }

    const newEntry = new passopModel({
      formId: uuidv4(),
      site,
      username,
      password,
    });

    await newEntry.save();

    // Clear cache after saving
    cache.del("allPasswords");

    res.status(201).json({
      message: "Password saved successfully",
      data: newEntry
    });
  } catch (error) {
    console.error("Save Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get All Passwords
const getAllPasswords = async (req, res) => {
  try {
    // console.log('Checking cache...');
    const cachedData = cache.get("allPasswords");
    if (cachedData) {
    //   console.log('Returning cached data');
      return res.status(200).json({ data: cachedData });
    }

    // console.log('Querying database...');
    const allData = await passopModel.find().lean(); // Add .lean() for better performance

    // console.log(`Found ${allData.length} passwords`);
    const plainData = allData.map((item) => ({
      formId: item.formId,
      site: item.site,
      username: item.username,
      password: item.password,
    }));

    cache.set("allPasswords", plainData);
    // console.log('Returning fresh data from DB');
    return res.status(200).json({message:"Data Fetched", data: plainData });
    
  } catch (error) {
    console.error("Get All Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Password
const deletePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await passopModel.findOneAndDelete({ formId: id });

    if (!deleted) {
      return res.status(404).json({ message: "Password not found" });
    }

    // Clear cache after deletion
    cache.del("allPasswords");

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Edit/Update Password
const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { site, username, password } = req.body;

    const updated = await passopModel.findOneAndUpdate(
      { formId: id },
      { site, username, password },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Entry not found" });
    }

    // Clear cache after update
    cache.del("allPasswords");

    res.status(200).json({
      message: "Updated successfully",
      data: {
        formId: updated.formId,
        site: updated.site,
        username: updated.username,
      },
    });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  savePassword,
  getAllPasswords,
  deletePassword,
  updatePassword,
};