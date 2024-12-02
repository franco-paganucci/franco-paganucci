import express from "express";
import { createGame, getInventory } from "../controllers/GameController.js";

const router = express.Router();

router.post("/", createGame);
router.get("/inventory", getInventory);

export default router;
