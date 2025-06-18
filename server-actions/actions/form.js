"use server";
import fs from "fs/promises";
export const submitActions = async (e) => {
  console.log(e.get("name"), e.get("add"));
  let a = await fs.writeFile(
    "bikash.txt",
    `Name: ${e.get("name")}\nAddress: ${e.get("add")}`
  );
};
