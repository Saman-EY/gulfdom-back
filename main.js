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

  const allowedOrigins = ["http://localhost:3001", "http://localhost:3000", "https://gulfdom.ru/"];

  app.use(
    cors({
      origin: (origin, callback) => {
        // allow server-to-server or Postman
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST"],
      credentials: true,
    })
  );

  app.use(mainRouter);

  NotFoundHandler(app);
  AllExceptionHandler(app);

  app.listen(port, () => {
    console.log(`server running`);
    // console.log(`server running on port http://localhost:${port}`);
  });
}

main();
