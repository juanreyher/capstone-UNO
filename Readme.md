# Capstone Game API

A RESTful API for managing games, built with Express, Sequelize, and MySQL.

## Features
- Create, read, update, delete, and partially update games
- Sequelize ORM for database management
- Centralized error handling

## Project Structure
```
src/
  app.js                # Main Express app
  const/globalConst.js  # Global constants
  controllers/          # Route handlers (gameControllers.js)
  database/
    config/             # DB config
    migrations/         # Sequelize migrations
    models/             # Sequelize models
  middlewares/          # Error handler
  routes/               # API routes (gameRoutes.js)
seeders/                # Data seeders (if any)
.env.example            # Example environment config
package.json            # Project metadata and scripts
```

## Configuration

1. Copy `.env.example` to `.env` and update with your database credentials:

```bash
cp .env.example .env
```

Example `.env`:
```
PORT=3080
DB_USERNAME=root
DB_PASSWORD=password
DB_NAME=capstone
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
NODE_ENV=development
```

2. Install dependencies:
```bash
npm install
```

3. Run database migrations:
```bash
npx sequelize-cli db:migrate
```

## Commands

- **Start the server (with auto-reload):**
  ```bash
  npm start
  ```
  (Uses nodemon for development)

- **Run migrations:**
  ```bash
  npx sequelize-cli db:migrate
  ```

- **(Optional) Seed the database:**
  ```bash
  npx sequelize-cli db:seed:all
  ```

## API Endpoints

Base URL: `/api/game`

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| POST   | /game/           | Create a new game          |
| GET    | /game/:id        | Get game by ID             |
| PUT    | /game/:id        | Update game (full)         |
| PATCH  | /game/:id        | Partially update game      |
| DELETE | /game/:id        | Delete game                |

## Example Request (Create Game)

```
POST /api/game/
Content-Type: application/json
{
  "name": "Super Mario Bros",
  "description": "Classic platformer",
  "genre": "Platform",
  "platform": "NES"
}
```

## Development Notes
- Uses ES Modules (`type: module` in package.json)
- Error handling via middleware
- Sequelize models and migrations for DB structure

## License
ISC
