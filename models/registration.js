const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxlength: [30, "Max username length is 30"],
      required: [true, "name is required"],
    },
    firstName: {
      type: String,
      maxlength: [30, "Max username length is 30"],
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: 1,
    },
    password: {
      type: String,
      minlength: [3, "Password is too short"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Registration", RegistrationSchema);
