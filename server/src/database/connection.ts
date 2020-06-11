import knex from "knex";

const connection = knex({
  client: "pg",
  version: "7.2",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "postgres",
    database: "nlw_1",
  },
  useNullAsDefault: true,
});

export default connection;
