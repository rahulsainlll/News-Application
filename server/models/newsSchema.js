const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: String,
    summary: String,
    content: String,
    cover: String,
  },
  {
    timestamps: true,
  }
);

const newsModel = new mongoose.model("news", newsSchema);

module.exports = newsModel;
