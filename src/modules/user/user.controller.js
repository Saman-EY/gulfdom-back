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
      const { fullname, phone, email, how_he_find, comment } = req.body;
      // return res.json({ data: { fullname, phone }, message: "testing" });
      const result = await this.#service.sendDetails({ fullname, phone, email, how_he_find, comment });
      return res.json({ data: result, message: UserMessage.Success });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
