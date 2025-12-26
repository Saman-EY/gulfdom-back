const { Router } = require("express");

const router = Router();

const testServer = async (req, res, next) => {
  try {
    console.log(process.env.SMTP_HOST);
    return res.json({ message: "testing server successfuly" });
  } catch (error) {
    next(error);
  }
};

router.get("/", testServer);

module.exports = {
  otherRoutes: router,
};

