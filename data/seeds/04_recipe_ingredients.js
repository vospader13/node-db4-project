exports.seed = async function(knex) {
    await knex("recipe_ingredients").insert([
      { ingredient_id: 1, recipe_id: 1, amount: 2, unit: "oz"},
      { ingredient_id: 2, recipe_id: 1, amount: 1, unit: "pinch"},
    ])
  };