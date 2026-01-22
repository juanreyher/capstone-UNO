import models from '../database/models/index.cjs';

console.log(Object.keys(models));

export const createGame = async (req, res, next) => {
    try {
        if(!req.body.name || req.body.name.trim() === "" || req.body.name === undefined || req.body.genre === undefined || req.body.genre.trim() === "" ) {
            return res.status(400).send({ message: "Bad Request: Name and Genre are required" });
        }

        const newGame = await models.Game.create(req.body);
        res.status(201).send(newGame);
    } catch (error) {
        next(error);
    }
}

export const getGameById = async (req, res, next) => {
    try {
        const gameId = parseInt(req.params.id);
        const game = await models.Game.findByPk(gameId);
        if (game) {
            res.status(200).send(game);
        } else {
            res.status(404).send({ message: "Game not found" });
        }
    } catch (error) {
        next(error);
    }

}

export const updateGame = async (req, res, next) => {
    try {
        const gameId = parseInt(req.params.id);
        const [updated] = await models.Game.update(req.body, {
            where: { id: gameId }
        });
        if (updated) {
            const updatedGame = await models.Game.findByPk(gameId);
            res.status(200).send(updatedGame);
        } else {
            res.status(404).send({ message: "Game not found" });
        }
    } catch (error) {
        next(error);
    }
}

export const deleteGame = async (req, res, next) => {
    const gameId = parseInt(req.params.id);
    try {
        const game = await models.Game.findByPk(gameId);
        if (game) {
            await game.destroy();
            res.status(200).send({ message: "Game deleted successfully" });
        } else {
            res.status(404).send({ message: "Game not found" });
        }
    } catch (error) {
        next(error);
    }

}

export const partiallyUpdateGame = async (req, res, next) => {
    try {
        const gameId = parseInt(req.params.id);
        const game = await models.Game.findByPk(gameId);
        if (game) {
            await game.update(req.body);
            res.status(200).send(game);
        } else {
            res.status(404).send({ message: "Game not found" });
        }
    } catch (error) {
        next(error);
    }
}