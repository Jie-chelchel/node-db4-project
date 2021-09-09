exports.seed = function (knex, Promise) {
  // we are not trucating here anymore
  return knex("ingredients").insert([
    { ingredient_name: "olive oil" },
    { ingredient_name: "garlic" },
    { ingredient_name: "black pepper" },
    { ingredient_name: "ginger" },
  ]);
};
