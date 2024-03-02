const newsModel = require("../models/newsSchema");
const { UserModel } = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

// register endpoints
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({
        error: "name is required",
      });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    // console.log("first")

    const exist = await UserModel.findOne({ email });

    if (exist) {
      return res.json({
        error: "Email is already taken",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log("Register error:", error);
  }
};

// Login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      res.json({
        error: "No user found",
      });
    }

    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_Secret,
        {},
        (err, token) => {
          if (err) throw err;

          res.cookie("token", token).json(user);
        }
      );
    } else {
      res.json({
        error: "Password do not match",
      });
    }
  } catch (err) {
    console.log("Login server error: ", err);
  }
};

// get all news endpoint
const getNews = async (req, res) => {
  const allNews = await newsModel.find();

  if (!allNews) {
    return res.json({
      error: "No post found",
    });
  }

  res.json(allNews);
};

// get news by endpoint
const getNewsById = async (req, res) => {
  const news = await newsModel.findById(req.params.id);

  if (!news) {
    return res.json({
      error: "No post found on this ID",
    });
  }

  res.json(news);
};

// post news endpoint
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

// update news endpoint
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

// delete news endpoint
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
