import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../models/user.js';
import * as userService from '../service/user-service.js';

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const userData = await userService.register(email, password, name);
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Ошибка при регистрации.',
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({
        message: 'Неверный email или пароль',
      });
    }

    const isValidPass = await bcrypt.compare(req.body.password, user._doc.password_hash);

    if (!isValidPass) {
      return res.status(400).json({
        message: 'Неверный email или пароль',
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );

    const { password_hash, ...userData } = user._doc;
    res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Ошибка при авторизации.',
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден.',
      });
    }
    const { password_hash, ...userData } = user._doc;
    res.json({ ...userData });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Ошибка при получении данных.',
    });
  }
};

export const logout = async (req, res) => {
  try {
  } catch (err) {}
};

export const refresh = async (req, res) => {
  try {
  } catch (err) {}
};

export const getUsers = async (req, res) => {
  try {
    console.log('getUsers');
    res.json();
  } catch (err) {}
};

export const activate = async (req, res) => {
  try {
    const activationLink = req.params.link;
    await userService.activate(activationLink);
    return res.redirect(process.env.CLIENT_URL);
  } catch (err) {
    console.log(err);
  }
};
