import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const app = express();
import morgan from "morgan";
import cookieParser from "cookie-parser";

//Router
import categoryRouter from "./routes/categoryRouter.js";
import faqRouter from "./routes/faqRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

//Middlewares
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { authenticateUser } from "./middlewares/authMiddleware.js";

// let dummy = [
//   {
//     company: "ad",
//     position: "frnot",
//   },
//   {
//     company: "kjn",
//     position: "backend",
//   },
// ];

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.post("/", (req, res) => {
//   console.log(req);
//   res.json({ message: "data receieved", data: req.body });
// });

// app.get("/api/v1/dummies", (req, res) => {
//   res.status(200).json({ dummy });

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/admin/categories", authenticateUser, categoryRouter);
app.use("/api/v1/admin/faq", authenticateUser, faqRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);

//not found middleware
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

//error middleware
app.use(errorHandlerMiddleware);
// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).json({ msg: "something went wrong" });
// });

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
