const mongoose = require("mongoose");

const adSchema = mongoose.Schema(
  {
    link: String,
    cover: String,
  },
  {
    timestamps: true,
  }
);

const adModel = mongoose.model("AD", adSchema);

module.exports = adModel;
