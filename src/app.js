import express from "express";
import { config } from "./config/config.js";
import gameRoutes from "./routes/gameRoutes.js";

const app = express();

const PORT = config.PORT;

app.use(express.json());

app.use("/api", gameRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});