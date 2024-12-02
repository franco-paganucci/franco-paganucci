import Game from "../models/Game.js";

export const registerGame = async (gameData) => {
  const { name, category, price, stock } = gameData;

  return await Game.create({ name, category, price, stock });
};

export const listInventory = async () => {
  return await Game.findAll({ where: { active: true } });
};
