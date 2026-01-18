import { Router } from "express";
import { createGame, getGameById, updateGame, deleteGame, partiallyUpdateGame } from "../controllers/gameControllers.js";

const router = Router();

router.post("/game/", (req, res) => {
    createGame(req, res);
});

router.get("/game/:id", (req, res) => {
    getGameById(req, res);
});

router.put("/game/:id", (req, res) => {
    updateGame(req, res);
});

router.delete("/game/:id", (req, res) => {
    deleteGame(req, res);
});

router.patch("/game/:id", (req, res) => {
    partiallyUpdateGame(req, res);
});

export default router;