import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import router from "./router/index.js";
import colors from "./config/console_colors.js";

dotenv.config();

const PORT = process.env.PORT || 4444;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);

const start = async () => {
  console.log(colors.fg.cyan, "[SlangIt] Server launch...", colors.reset);

  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(() =>
        console.log(colors.fg.green, "[SlangIt] DB is connected!", colors.reset)
      );

    app.listen(PORT, () => {
      console.log(
        colors.fg.cyan,
        "[SlangIt] Server is running at",
        colors.fg.blue,
        process.env.BASE_URL || `https://localhost:${PORT}`,
        colors.reset
      );
    });
  } catch (err) {
    console.log(err);
  }
};

start();
