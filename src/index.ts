import exprees from "express";
import { config } from "dotenv";

config();

const app = exprees();

const port = process.env.port || 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`listening on port ${port}!`));
