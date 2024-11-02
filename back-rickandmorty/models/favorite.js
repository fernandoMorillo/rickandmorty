const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  status: String,
  species: String,
  gender: String,
});

module.exports = mongoose.model("Favorite", favoriteSchema);
