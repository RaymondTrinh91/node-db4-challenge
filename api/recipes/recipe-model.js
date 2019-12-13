const db = require('../../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
        .select('name')
}

function getShoppingList(recipe_id) {
    return db("recipe_ingredients")
        .select('*')
        .where({ recipe_id: recipe_id })
}

function getInstructions(recipe_id) {
    return db('recipes')
        .select('instructions')
        .where({ recipe_id: recipe_id })
}