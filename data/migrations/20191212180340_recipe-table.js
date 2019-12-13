
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments()

      tbl.string('name')
        .notNullable()

      tbl.string('instructions')
        .notNullable()
  })
};

exports.down = function(knex) {
};
