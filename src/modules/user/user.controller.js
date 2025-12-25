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
      return res.json({ data: null, message: UserMessage.Success });
      const body = req.user;
      const result = await this.#service.sendDetails(body);
      return res.json({ data: result, message: UserMessage.Success });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
