exports.seed = function (knex, Promise) {
  // we are not trucating here anymore
  return knex("recipes").insert([
    { recipe_name: "fried noodle" },
    { recipe_name: "homemade pizza" },
  ]);
};
