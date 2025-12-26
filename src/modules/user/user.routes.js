const { Router } = require("express");
const userController = require("./user.controller");
const { detailValidator } = require("../../common/validators/validators");
const { checkValidator } = require("../../common/middlewares/checkValidator");
const router = Router();
router.post("/", ...detailValidator(), checkValidator, userController.sendDetails);
module.exports = {
  UserRouter: router,
};
