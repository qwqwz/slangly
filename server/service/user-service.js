import UserModel from '../models/user.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mailService from './mail-service.js';
import * as tokenService from './token-service.js';
import UserDto from '../dtos/user-dto.js';

export const register = async (email, pass, name) => {
  try {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error('Пользователь с таким почтовым адресом уже существует');
    }

    const hashPassword = await bcrypt.hash(pass, 3);
    const activationLink = uuidv4();

    const user = await UserModel.create({ name, email, hashPassword, activationLink });
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`,
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  } catch (err) {
    console.log(err);
  }
};

export const activate = async (activationLink) => {
  try {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw new Error('Некорректная ссылка активации');
    }

    user.isActivated = true;
    await user.save();
  } catch (err) {
    console.log(err);
  }
};
