import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

const testConnection = async () => {
  try {
    sequelize.authenticate();
    console.log("Conexão realizada com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados.");
  }
};

export { sequelize, testConnection }
