const { UserMessage } = require("./user.messages");
const userService = require("./user.service");
const autoBind = require("auto-bind");
class UserController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = userService;
  }
  async sendDetails(req, res, next) {
    try {
      const { name, phone } = req.body;
      console.log(name, phone);
      const result = await this.#service.sendDetails({ name, phone });
      return res.json({ data: result, message: UserMessage.Success });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
