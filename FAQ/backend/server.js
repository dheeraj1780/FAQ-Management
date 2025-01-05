import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const app = express();
import morgan from "morgan";

//Router
import categoryRouter from "./routes/categoryRouter.js";
import faqRouter from "./routes/faqRouter.js";
import authRouter from "./routes/authRouter.js";

//Middlewares
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

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

app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/faq", faqRouter);
app.use("/api/v1/", authRouter);

//not found middleware
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

//error middleware
app.use(errorHandlerMiddleware);

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
