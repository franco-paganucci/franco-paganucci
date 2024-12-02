import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import Game from "./Game.js";

class Sale extends Model {}

Sale.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    gameId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "games",
        key: "id",
      },
    },
    quantitySold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
  },
  {
    sequelize: connection,
    modelName: "sales",
    timestamps: true,
  }
);

Sale.beforeCreate(async (sale, options) => {
  const game = await Game.findByPk(sale.gameId);
  if (!game) {
    throw new Error("Game not found");
  }
  if (game.stock < sale.quantitySold) {
    throw new Error("Insufficient stock");
  }
  game.stock -= sale.quantitySold;
  await game.save();
});

export default Sale;
