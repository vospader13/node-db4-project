exports.seed = async function(knex) {
    await knex("ingredients").insert([
      { name: "olive oil"},
      { name: "salt"},
      { name: "butter"},
      { name: "black pepper"},
    ])
  };