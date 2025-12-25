const express = require("express");
const dotenv = require("dotenv");
const mainRouter = require("./src/app.routes");
const NotFoundHandler = require("./src/common/exception/not-found.handler");
const AllExceptionHandler = require("./src/common/exception/all-exception.handler");
const cors = require("cors");

dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT || 3000;

  app.set("trust proxy", 1);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    cors({
      origin: "https://your-frontend-domain.com",
      methods: ["GET", "POST"],
      credentials: true,
    })
  );

  app.use(mainRouter);

  NotFoundHandler(app);
  AllExceptionHandler(app);

  app.listen(port, () => {
    // console.log(`server running on port ${port}`);
    console.log(`server running on port http://localhost:${port}`);
  });
}

main();
