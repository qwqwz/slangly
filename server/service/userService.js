import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import tokenService from "../service/tokenService.js";
import UserDto from "../dtos/userDto.js";

export default {
  register: async (email, name, password) => {
    const hashPassword = await bcrypt.hash(password, 3);

    const doc = new UserModel({
      name,
      email,
      hashPassword,
    });

    const user = await doc.save();

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  },
};
