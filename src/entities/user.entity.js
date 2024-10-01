import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const UserEntity = database.define("tb_user", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
  },
  agency: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  account: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balance: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export { UserEntity };
