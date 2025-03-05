const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 2 })
      .withMessage("First name must be atleast 2 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("The password must be 6 character long"),
  ],
  userController.registerUser
);

module.exports = router;
