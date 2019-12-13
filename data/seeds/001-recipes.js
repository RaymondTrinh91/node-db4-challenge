
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Tacos', instructions: 'Put all ingredients into tacoshell'},
        {name: 'Cup of Water', instructions: 'Pour water into glass'},
        {name: 'Ham Sandwich', instructions: 'Put all ingredients inbetween slices of bread'}
      ]);
    });
};
