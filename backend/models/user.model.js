const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userpicture: { type: String, default: "userDefaultProfile.png" },
  password: { type: String, required: true },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
