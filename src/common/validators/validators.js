const { body } = require("express-validator");

const detailValidator = () => [
  body("fullname")
    .trim()
    .notEmpty()
    .withMessage("fullname is required")
    .isLength({ min: 4, max: 35 })
    .withMessage("fullname must be 4–35 characters"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("phone is required")
    .isMobilePhone("any")
    .withMessage("mobile format is invalid"),
];

module.exports = { detailValidator };
