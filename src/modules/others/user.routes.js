const { Router } = require("express");

const router = Router();

const testServer = async (req, res, next) => {
  try {
    return res.json({ message: "testing server successfuly" });
  } catch (error) {
    next(error);
  }
};

router.get("/", testServer);

module.exports = {
  otherRoutes: router,
};

