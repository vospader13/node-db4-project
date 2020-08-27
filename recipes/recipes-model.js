const db = require("../data/config")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("recipes as r")
    .where("r.id", recipe_id)
    .join("recipe_ingredients as r_i", "r.id", "r_i.recipe_id")
    .join("ingredients as i", "r_i.ingredient_id", "i.id")
    .select("r.name as recipe_name", "i.name as ingredient_name", "r_i.amount", "r_i.unit")
    
}

function getInstructions(recipe_id) {
    return db("recipes as r")
    .where("r.id", recipe_id)
    .join("instructions as i", "r.id", "i.recipe_id")
    .select("r.name as recipe_name", "i.step_number", "i.description")
}