import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_school", "root", "rootpass123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

async function authenticateConnectionToORM() {
  try {
    await sequelize.authenticate();
    console.log("Connect to ORM DB");
  } catch (err) {
    console.log("err to connect to db", err);
  }
}
await authenticateConnectionToORM();

await sequelize.sync();

export default sequelize;