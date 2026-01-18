const games = [
    {
        id: 1,
        name: "The Legend of Zelda: Breath of the Wild",
        description: "An open-world adventure game set in the kingdom of Hyrule.",
        genre: "Action-adventure",
        platform: "Nintendo Switch"
    }
];

export const createGame = (req, res) => {
    const newGame = req.body;
    newGame.id = games.length + 1;
    games.push(newGame);
    res.status(201).send(newGame);
}

