const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "please provide a email"],
      lowercase: true,
      validate: [validator.isEmail, "please provide a valid email!"],
      trim: true,
      unique: [true, "please provide a unique email!"],
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
      validate: {
        validator: (value) => {
          validator.isStrongPassword(value, {
            minLength: 3,
            minLowercase: 2,
            minNumber: 1,
            minSymbols: 1,
            minUppercase: 1,
          });
          message: "{VALUE} is not strong password!";
        },
      },
    },
    confirmPassword: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "password don't match",
      },
    },
    firstName: {
      type: String,
      required: [true, "please provide your name"],
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    lastName: {
      type: String,
      required: [true, "please provide your name"],
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    contactNumber: {
      type: String,
      validate: [
        validator.isMobilePhone,
        "please provide a valid mobile number",
      ],
    },
    role: {
      type: String,
      enum: ["candidate", "manager", "admin"],
      default: "candidate",
    },
    address: String,
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "inactive",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
