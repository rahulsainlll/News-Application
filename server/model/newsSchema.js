const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const newsModel = new mongoose.model("news", newsSchema);

module.exports = newsModel;
