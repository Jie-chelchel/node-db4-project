exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 256).notNullable();
      table.timestamps(true, true);
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.integer("step_number", 128).unsigned().notNullable();
      table.string("step_instructions", 1024).notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name", 256).notNullable();
    })
    .createTable("step_ingredient_quantity", (table) => {
      table.increments("quantity_id");
      table.float("quantity").notNullable();

      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = async function (knex) {
  // SO FREAKIN' EASY TO GET WRONG
  await knex.schema
    .dropTableIfExists("step_ingredient_quantity")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
