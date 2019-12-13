
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'Water'},
        {ingredient: 'Beef'},
        {ingredient: 'Lettuce'},
        {ingredient: 'Cheese'},
        {ingredient: 'Tomato'},
        {ingredient: 'Bread'},
        {ingredient: 'Ham'},
        {ingredient: 'Tacoshell'}
      ]);
    });
};
