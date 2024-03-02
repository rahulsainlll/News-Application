const newsModel = require("../models/newsSchema");
const jwt = require("jsonwebtoken");



const getNews = async (req, res) => {
  const allNews = await newsModel.find();

  if (!allNews) {
    return res.json({
      error: "No post found",
    });
  }

  res.json(allNews);
};

const getNewsById = async (req, res) => {
  const news = await newsModel.findById(req.params.id);

  if (!news) {
    return res.json({
      error: "No post found on this ID",
    });
  }

  res.json(news);
};

const postNews = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.json({
        error: "title is required",
      });
    }

    if (!description) {
      return res.json({
        error: "description is required",
      });
    }

    const post = await newsModel.create({
      title: title,
      description: description,
    });

    return res.json(post);
  } catch (err) {
    console.log("Error while posting news:", err);
    return res.json({
      error: "Failed to post news",
    });
  }
};

const updateNewsById = async (req, res) => {
  const news = await newsModel.findById(req.params.id);
  const { title, description } = req.body;

  if (news.title !== title) {
    news.title = title;
  }

  if (news.description !== description) {
    news.description = description;
  }

  news.save().then(() => console.log("updated"));
  res.json(news);
};

const deleteNewsById = async (req, res) => {
  const deleteNews = await newsModel.findOneAndDelete({ _id: req.params.id });

  if (!deleteNews) {
    return res.json({ error: "Failed to delete news" });
  } else {
    console.log("Successful deletion");
  }
  res.json({ success: "Successful deletion" });
};

module.exports = {
  loginUser,
  registerUser,
  getNews,
  getNewsById,
  postNews,
  updateNewsById,
  deleteNewsById,
};
