exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id").unique()
        table.text("name").notNull()
    })

    await knex.schema.createTable("instructions", (table) => {
        table.increments("id").unique()
        table.integer("recipe_id").references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE")
        table.integer("step_number").notNull()
        table.string("description").notNull()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id").unique()
        table.text("name").notNull()
    })

    await knex.schema.createTable("recipe_ingredients", (table) => {
        table.integer("ingredient_id").references("id").inTable("ingredients").onDelete("CASCADE").onUpdate("CASCADE")
        table.integer("recipe_id").references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE")
        table.float("amount").notNull()
        table.text("unit").notNull()
        table.primary(["ingredient_id", "recipe_id"])
    })


};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("recipes")
};
