import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import router from './router/index.js';
import { loginValidation, registerValidation, WordCreateValidation } from './validations.js';
import checkAuth from './utils/checkAuth.js';
import handleValidationErrors from './utils/handleValidationErrors.js';
import * as UserController from './controllers/UserController.js';
import * as ContentController from './controllers/ContentController.js';

dotenv.config();

const PORT = process.env.PORT || 4444;
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',

  fg: {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    gray: '\x1b[90m',
    crimson: '\x1b[38m', // Scarlet
  },
  bg: {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
    gray: '\x1b[100m',
    crimson: '\x1b[48m',
  },
};

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

app.get('/auth/me', checkAuth, handleValidationErrors, UserController.getUser);
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.post(
  '/words/create',
  checkAuth,
  WordCreateValidation,
  handleValidationErrors,
  ContentController.wordCreate,
);

const start = async () => {
  console.log(colors.fg.cyan, '[SlangIt] Server launch...', colors.reset);

  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(() => console.log(colors.fg.green, '[SlangIt] DB is connected!', colors.reset));

    app.listen(PORT, () => {
      console.log(
        colors.fg.cyan,
        '[SlangIt] Server is running at',
        colors.fg.blue,
        process.env.BASE_URL || `https://localhost:${PORT}`,
        colors.reset,
      );
    });
  } catch (err) {
    console.log(err);
  }
};

start();
