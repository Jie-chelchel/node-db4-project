// Update with your config settings.

module.exports = {
  client: "sqlite3",
  useNullAsDefault: true, // needed for sqlite
  connection: {
    filename: "./db/recipes.db3",
  },
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
    },
  },
};
