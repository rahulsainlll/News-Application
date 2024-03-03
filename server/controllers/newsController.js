const newsModel = require("../models/newsSchema");
const { UserModel } = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const fs = require("fs");

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

// profile endpoint
const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_Secret, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

// logout endpoint
const logout = (req, res) => {
  res.cookie("token", "").json("ok");
};

// get all news endpoint
const getNews = async (req, res) => {
  const allNews = await newsModel.find().sort({ createdAt: -1 }).limit(10);

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
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    const { title, summary, content } = req.body;

    if (!title) {
      return res.json({
        error: "title is required",
      });
    }

    if (!summary) {
      return res.json({
        error: "summary is required",
      });
    }

    if (!content) {
      return res.json({
        error: "summary is required",
      });
    }

    const post = await newsModel.create({
      title: title,
      summary: summary,
      content: content,
      cover: newPath,
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
const updateNews = async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  jwt.verify(token, process.env.JWT_Secret, {}, async (err, info) => {
    if (err) {
      console.error("Error verifying token:", err);
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { id, title, summary, content } = req.body;
    const post = await newsModel.findById(id);
    const postDoc = await newsModel.findByIdAndUpdate(id, {
      title,
      summary,
      content,
      cover: newPath ? newPath : post.cover,
    });

    res.json(postDoc);
  });
};

// delete news endpoint
const deleteNewsById = async (req, res) => {
  try {
    const deleteNews = await newsModel.findOneAndDelete({ _id: req.params.id });

    if (!deleteNews) {
      return res.json({ error: "Failed to delete news" });
    }

    res.json({ success: "Successful deletion" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  loginUser,
  registerUser,
  getProfile,
  logout,
  getNews,
  getNewsById,
  postNews,
  updateNews,
  deleteNewsById,
};
