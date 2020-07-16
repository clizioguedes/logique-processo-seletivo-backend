const crypto = require("crypto");

const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("associados").count();

    const associados = await connection("associados")
      .limit(20)
      .offset((page - 1) * 20)
      .select("*");

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(associados);
  },
  async create(request, response) {
    const {
      tipo,
      patrocinador,
      nome,
      cpf,
      rg,
      celular,
      endereco,
      bairro,
      cidade,
      banco,
      agencia,
      conta,
    } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("associados").insert({
      id,
      tipo,
      patrocinador,
      nome,
      cpf,
      rg,
      celular,
      endereco,
      bairro,
      cidade,
      banco,
      agencia,
      conta,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;

    await connection("associados").where("id", id).delete();

    return response.status(204).send();
  },
};
