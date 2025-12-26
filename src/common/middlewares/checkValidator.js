const { validationResult } = require("express-validator");

function checkValidator(req, res, next) {
  const errors = validationResult(req);
  // let obj = {};

  // errors.array().forEach((err) => {
  //   obj[err.path] = err.msg;
  // });

  // if (Object.keys(obj).length > 0) {
  //   throw {
  //     status: 400,
  //     error: obj,
  //   };
  // }

  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((err) => ({
      field: err.path,
      message: err.msg,
    }));

    throw {
      status: 400,
      message: "ValidationError",
      error: formattedErrors,
    };
  }

  next();
}

module.exports = { checkValidator };
