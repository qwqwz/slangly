import { Router } from "express";
import {
  loginValidation,
  emailValidation,
  registerValidation,
  WordCreateValidation,
} from "../validations.js";
import checkAuth from "../utils/checkAuth.js";
import handleValidationErrors from "../utils/handleValidationErrors.js";
import * as UserController from "../controllers/UserController.js";
import * as ContentController from "../controllers/ContentController.js";

const router = new Router();

router.get("/auth/me", checkAuth, handleValidationErrors, UserController.getMe);

router.post(
  "/auth/validateEmail",
  emailValidation,
  handleValidationErrors,
  UserController.validateEmail
);

router.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);

router.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);

router.get(
  "/words/getList",
  handleValidationErrors,
  ContentController.getWords
);

router.post(
  "/words/create",
  WordCreateValidation,
  handleValidationErrors,
  ContentController.wordCreate
);

export default router;
