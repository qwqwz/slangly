import WordModel from "../models/word.js";
import WordDto from "../dtos/word-dto.js";

export const wordCreate = async (req, res) => {
  try {
    var word = await WordModel.findOne({ title: req.body.title });

    if (!word) {
      const newWord = new WordModel({
        title: req.body.title,
        tags: req.body.tags,
      });

      word = await newWord.save();
    }

    const wordDto = new WordDto(word);

    res.json({
      ...wordDto,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getWords = async (req, res) => {
  try {
    const wordsList = await WordModel.find().sort({ createdAt: -1 }).limit(10);

    if (!wordsList || wordsList.length === 0) {
      return res.status(404).json({
        message: "No words",
      });
    }

    const wordsDtoList = wordsList.map((word) => new WordDto(word));

    res.json(wordsDtoList);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Неизвестная ошибка",
    });
  }
};
