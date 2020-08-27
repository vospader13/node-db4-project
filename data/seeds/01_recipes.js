exports.seed = async function(knex) {
    await knex("recipes").insert([
      { name: "Chef John's Meatless Meatballs"},
      { name: "Black Bean Tacos"},
      { name: "Homemade Veggie Pizza"},
      { name: "Vegetarian Cassoulet"},
    ])
};