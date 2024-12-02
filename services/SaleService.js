import Sale from "../models/Sale.js";
import Game from "../models/Game.js";

export const registerSale = async (saleData) => {
  const { gameId, quantitySold } = saleData;

  if (!gameId || !quantitySold || quantitySold <= 0) {
    throw new Error("Datos de venta inválidos");
  }
  
  const game = await Game.findByPk(gameId);
  if (!game) {
    throw new Error("Juego no encontrado");
  }

  const sale = await Sale.create({ gameId, quantitySold });

  return sale;
};
