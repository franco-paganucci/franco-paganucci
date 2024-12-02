import { registerGame, listInventory } from "../services/GameService.js";

export const createGame = async (req, res) => {
  try {
    const game = await registerGame(req.body);
    return res.status(201).json(game);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getInventory = async (req, res) => {
  try {
    const games = await listInventory();
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
