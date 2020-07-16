exports.up = function (knex) {
  return knex.schema.createTable("associados", function (table) {
    table.string("id").primary();
    table.string("tipo").notNullable();
    table.string("patrocinador");
    table.string("nome").notNullable();
    table.string("cpf").notNullable();
    table.string("rg").notNullable();
    table.string("celular").notNullable();
    table.string("endereco").notNullable();
    table.string("bairro").notNullable();
    table.string("cidade").notNullable();
    table.string("banco").notNullable();
    table.string("agencia").notNullable();
    table.string("conta").notNullable();
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("associados");
};
