
exports.up = function (knex) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments()

        tbl.string('ingredient')
            .notNullable()
    })
};

exports.down = function (knex) {
};
