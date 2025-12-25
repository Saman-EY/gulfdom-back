const autoBind = require("auto-bind");
class UserService {
  constructor() {
    autoBind(this);
  }

  async sendDetails(body) {
    return body;
  }
}
module.exports = new UserService();
