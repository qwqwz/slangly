import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import router from "./router/index.js";
import colors from "./config/console_colors.js";
import {
  loginValidation,
  registerValidation,
  WordCreateValidation,
} from "./validations.js";
import checkAuth from "./utils/checkAuth.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";
import * as UserController from "./controllers/UserController.js";
import * as ContentController from "./controllers/ContentController.js";

dotenv.config();

const PORT = process.env.PORT || 4444;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);

app.get("/auth/me", checkAuth, handleValidationErrors, UserController.getUser);
app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.post(
  "/words/create",
  checkAuth,
  WordCreateValidation,
  handleValidationErrors,
  ContentController.wordCreate
);

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
