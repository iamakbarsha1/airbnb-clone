const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema(
   {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      username: { type: String, required: true, unique: true },
      password: { type: String, required: true }
   },
   {
      collection: "User-Login"
   }
);

const UserData = mongoose.model("UserData", UserSchema);

module.exports = model;