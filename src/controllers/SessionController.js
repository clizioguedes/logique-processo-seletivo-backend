const connection = require("../database/connection");
module.exports = {
  async create(request, response) {
    const { user, password } = request.body;

    const login = await connection("users")
      .where("user", user)
      .andWhere("password", password)
      .select("user")
      .first();

    if (!login) {
      return response
        .status(400)
        .json({ error: "O usuário informado não existe" });
    }

    return response.json(login);
  },
};
