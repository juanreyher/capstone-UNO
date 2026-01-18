import { Router } from "express";

const router = Router();

router.post("/game/", (req, res) => {
    res.send("Game created");
});

router.get("/game/:id", (req, res) => {
    const gameId = req.params.id;
    res.send(`Game details for ID: ${gameId}`);
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