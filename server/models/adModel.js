const mongoose = require("mongoose");

const adSchema = mongoose.Schema(
  {
    link: String,
    type:String,
    cover: String,
  },
  {
    timestamps: true,
  }
);

const adModel = new mongoose.model("AD", adSchema);

module.exports = adModel;
