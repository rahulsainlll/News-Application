const newsModel = require("../model/newsSchema");

const getNews = async (req, res) => {
  const allNews = news.find();

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
  res.send("Its working");
};

const deleteNewsById = async (req, res) => {
  res.send("Its working");
};

module.exports = {
  getNews,
  getNewsById,
  postNews,
  updateNewsById,
  deleteNewsById,
};
