import WordModel from '../models/word.js';

export const wordCreate = async (req, res) => {
  try {
    var word = await WordModel.findOne({ title: req.body.title });

    if (!word) {
      const newWord = new WordModel({
        title: req.body.title,
      });

      word = await newWord.save();
    }

    res.json({
      word,
    });
  } catch (err) {
    console.log(err);
  }
};
