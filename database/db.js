import mongoose from "mongoose";

const userdb = process.env.USERDB;
const passdb = process.env.PASSDB;
const host = process.env.HOSTDB;
const namedb = process.env.NAMEDB;

const url = `mongodb+srv://${userdb}:${passdb}@${host}/${namedb}`;
console.log(url);

try {
  await mongoose.connect(url);
  console.log("database conected");
} catch (error) {
  console.log("Error database", error);
}
