
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe-ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-ingredients').insert([
        { recipe_id: 1, ingredient_amount: '1 Cup', ingredient_id: 2 },
        { recipe_id: 1, ingredient_amount: '1 Cup', ingredient_id: 3 },
        { recipe_id: 1, ingredient_amount: '1 Cup', ingredient_id: 4 },
        { recipe_id: 1, ingredient_amount: '1 Cup', ingredient_id: 5 },
        { recipe_id: 1, ingredient_amount: '4 Shells', ingredient_id: 8 },
        { recipe_id: 2, ingredient_amount: '1 Cup', ingredient_id: 1 },
        { recipe_id: 3, ingredient_amount: '2 Slices', ingredient_id: 6 },
        { recipe_id: 3, ingredient_amount: '2 Slices', ingredient_id: 4 },
        { recipe_id: 3, ingredient_amount: '2 Slices', ingredient_id: 7 },
        { recipe_id: 3, ingredient_amount: '2 Slices', ingredient_id: 5 },
        { recipe_id: 3, ingredient_amount: '1/3 Cups', ingredient_id: 3 }
      ]);
    });
};
