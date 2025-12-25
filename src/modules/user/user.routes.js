const { Router } = require("express");
const userController = require("./user.controller");
const router = Router();
router.post("/", userController.sendDetails);
module.exports = {
  UserRouter: router,
};
