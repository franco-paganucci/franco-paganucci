import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Los datos ingresados no son válidos: El nombre del juego es obligatorio." },
        notEmpty: { msg: "Los datos ingresados no son válidos: El nombre del juego no puede estar vacío." },
      },
    },
    category: {
      type: DataTypes.ENUM("estrategia", "rol", "cartas", "familiar"),
      allowNull: false,
      validate: {
        isIn: {
          args: [["estrategia", "rol", "cartas", "familiar"]],
          msg: "Los datos ingresados no son válidos - La categoría debe ser una de las siguientes: estrategia, rol, cartas, familiar.",
        },
        notNull: { msg: "Los datos ingresados no son válidos: La categoría es obligatoria." },
        notEmpty: { msg: "Los datos ingresados no son válidos: La categoría no puede estar vacía." },
      },
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        isDecimal: {
          msg: "Los datos ingresados no son válidos: El precio debe ser un número decimal.",
        },
        min: {
          args: [0.01],
          msg: "Los datos ingresados no son válidos: El precio debe ser mayor que 0.",
        },
        notNull: { msg: "Los datos ingresados no son válidos: El precio es obligatorio." },
        notEmpty: { msg: "Los datos ingresados no son válidos: El precio no puede estar vacío." },
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "Los datos ingresados no son válidos: El stock debe ser un número entero.",
        },
        min: {
          args: [0],
          msg: "Los datos ingresados no son válidos: El stock no puede ser negativo.",
        },
        notNull: { msg: "Los datos ingresados no son válidos: El stock es obligatorio." },
        notEmpty: { msg: "Los datos ingresados no son válidos: El campo stock no puede estar vacío." },
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: "games",
    paranoid: true,
    timestamps: true,
  }
);

export default Game;
