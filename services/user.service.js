const User = require("../models/User");

exports.signUpUserService = async (userInfo) => {
  return (user = await User.create(userInfo));
};
