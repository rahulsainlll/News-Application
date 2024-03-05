const dotenv = require("dotenv").config();
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");

// middlware
router.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

const {
  getNews,
  getNewsByType,
  getNewsById,
  postNews,
  postAd,
  updateNews,
  deleteNewsById,
  registerUser,
  loginUser,
  getProfile,
  logout,
} = require("../controllers/newsController");


router.post("/register", registerUser);
router.post("/logout", logout);
router.post("/login", loginUser);

router.get("/profile", getProfile);
router.get("/news", getNews);
router.get("/news/type/:type/:how", getNewsByType);
router.get("/news/:id", getNewsById); 

router.post("/news", upload.single("file"), postNews);
router.post("/news/ad", upload.single("file"), postAd);
router.put("/news",upload.single("file"), updateNews);
router.delete("/news/:id", deleteNewsById);

module.exports = router;


 