exports.seed = async function(knex) {
    await knex("instructions").insert([
      { recipe_id: 1, step_number: 1, description: "Heat olive oil in a skillet over medium-high heat. Add mushrooms to the hot oil, sprinkle with salt, and cook and stir until liquid from mushrooms has evaporated. Stir butter into mushrooms, reduce heat to medium, and cook and stir mushrooms until golden brown, about 5 minutes."},
      { recipe_id: 1, step_number: 2, description: "Stir onion into mushrooms and cook, stirring often, until onion is translucent, 5 minutes. Remove skillet from heat and stir garlic into mushroom mixture until fragrant, about 1 minute. Transfer mixture to a mixing bowl."},
      { recipe_id: 1, step_number: 3, description: "Mix oats into mushroom mixture until thoroughly combined. Gently stir 1 ounce Parmigiano-Reggiano cheese into mixture. Add bread crumbs, 1/4 cup parsley, and 1 egg; season with salt, black pepper, cayenne pepper, and oregano. Mix together with a fork until crumbly. Stir in remaining 1 egg. Mixture should hold together when pressed."},
    ])
  };