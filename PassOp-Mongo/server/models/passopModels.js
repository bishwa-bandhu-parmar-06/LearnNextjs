const mongoose = require("mongoose");
const MODEL_NAMES = require("../modelNames");
const passopSchema = new mongoose.Schema(
  {
    formId: {
      type: String,
      required: true,
    },
    site: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Passop = mongoose.model(MODEL_NAMES.PASSOP, passopSchema);

module.exports = Passop;