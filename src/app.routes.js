const { Router } = require("express");
const { UserRouter } = require("./modules/user/user.routes");
const { otherRoutes } = require("./modules/others/user.routes");

const mainRouter = Router();

mainRouter.use("/api/send-details", UserRouter);
mainRouter.use("/api/test-server", otherRoutes);

module.exports = mainRouter;
