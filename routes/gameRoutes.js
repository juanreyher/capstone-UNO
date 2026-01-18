import { Router } from "express";
import { createGame, getGameById } from "../controllers/gameControllers.js";

const router = Router();

router.post("/game/", (req, res) => {
    createGame(req, res);
});

router.get("/game/:id", (req, res) => {
    getGameById(req, res);
});

router.put("/game/:id", (req, res) => {
    const gameId = req.params.id;
    res.send(`Game with ID: ${gameId} updated`);
});

router.delete("/game/:id", (req, res) => {
    const gameId = req.params.id;
    res.send(`Game with ID: ${gameId} deleted`);
});

router.patch("/game/:id", (req, res) => {
    const gameId = req.params.id;
    res.send(`Game with ID: ${gameId} partially updated`);
});

export default router;