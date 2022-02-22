import express from "express";
import { __dirname } from "./utils.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT; // || 8080;

app.use(express.static(__dirname + "/public"));

app.get("/info", (req, res) => {
  res.send({ PORT: PORT });
});

app.get("/info2", (req, res) => {
  res.send({ message: "Hola soy Fran" });
});

app.listen(PORT, () => console.log(`Listening on ${PORT} port.`));
