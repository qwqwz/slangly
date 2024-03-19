import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен содержать минимум 5 символов').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен содержать минимум 5 символов').isLength({ min: 5 }),
  body('name', 'Имя должно содержать минимум 3 символа').isLength({ min: 3 }),
  body('avatar_url', 'Неверная ссылка на изображение').optional().isURL(),
];

export const WordCreateValidation = [
  body('title')
    .isString()
    .withMessage('Значение должно быть строкой')

    .matches(/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/)
    .withMessage('Название может содержать только буквы и тире')
    .trim(),
];
