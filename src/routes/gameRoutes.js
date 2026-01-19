import { Router } from "express";
import { createGame, getGameById, updateGame, deleteGame, partiallyUpdateGame } from "../controllers/gameControllers.js";


const router = Router();

router.post("/game/", createGame)

router.get("/game/:id", getGameById);

router.put("/game/:id", updateGame);

router.delete("/game/:id", deleteGame);

router.patch("/game/:id", partiallyUpdateGame);

export default router;