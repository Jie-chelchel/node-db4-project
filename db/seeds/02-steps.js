exports.seed = function (knex, Promise) {
  // we are not trucating here anymore
  return knex("steps").insert([
    {
      step_number: 1,
      step_instructions: "Put a large saucepan on a medium heat",
      recipe_id: 1,
    },
    {
      step_number: 2,
      step_instructions: "Add 1 tbsp olive oil",
      recipe_id: 1,
    },
    {
      step_number: 3,
      step_instructions: "Add 1 cup chopped tomatoes ",
      recipe_id: 1,
    },
    {
      step_number: 1,
      step_instructions: "bala bala bala  ",
      recipe_id: 2,
    },
    {
      step_number: 2,
      step_instructions: "hahaha hahaha hahaha   ",
      recipe_id: 2,
    },
  ]);
};
