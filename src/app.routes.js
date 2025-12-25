const { Router } = require("express");
const { UserRouter } = require("./modules/user/user.routes");

const mainRouter = Router();

mainRouter.use("/send-details", UserRouter);

module.exports = mainRouter;
