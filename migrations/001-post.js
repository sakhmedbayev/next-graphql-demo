exports.up = function (knex) {
  return knex.schema
    .createTable("post", function (table) {
      table.increments("id");
      table.string("title", 255).notNullable();
      table.string("text").notNullable();
    })
    .createTable("comment", function (table) {
      table.increments("id");
      table
        .integer("postId")
        .unsigned()
        .references("id")
        .inTable("post")
        .notNullable()
        .onDelete("CASCADE");
      table.string("author", 255).notNullable();
      table.string("text").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("post");
};
