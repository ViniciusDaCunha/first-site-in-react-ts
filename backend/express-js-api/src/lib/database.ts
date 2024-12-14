import knex from "knex";

function connectDatabase() {
  return  knex({
    client: "mysql2",
    connection: {
      host: "mysql8033",
      port: 3306,
      user: "mysql",
      password: "root",
      database: "site_vini_dev",
    },
  });
}

export default connectDatabase;