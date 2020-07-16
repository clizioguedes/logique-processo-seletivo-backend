exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.string("id").primary();
    table.string("user").notNullable();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("users");
};
