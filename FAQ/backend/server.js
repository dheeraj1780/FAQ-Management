import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const app = express();
import morgan from "morgan";
let dummy = [
  {
    company: "ad",
    position: "frnot",
  },
  {
    company: "kjn",
    position: "backend",
  },
];

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data receieved", data: req.body });
});

app.get("/api/v1/dummies", (req, res) => {
  res.status(200).json({ dummy });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log("server running.... on port ", { port });
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
