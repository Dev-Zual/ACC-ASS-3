const { signUpUserService } = require("../services/user.service");

exports.signUpUser = async (req, res) => {
  try {
    const user = await signUpUserService(req.body);
    res.status(200).json({
      status: "success",
      message: "successfully created user",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};
