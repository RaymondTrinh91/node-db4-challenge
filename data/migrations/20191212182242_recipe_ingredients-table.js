
exports.up = function (knex) {
  return knex.schema.createTable('recipe-ingredients', tbl => {
    tbl.primary(['recipe_id', 'ingredient_id'])

    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')

    tbl.string('ingredient_amount')
      .notNullable()

    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('recipe-ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
