const Favorite = require("../models/Favorite");

exports.saveFavorites = async (req, res) => {
  try {
    const favorites = req.body.favorites;
    if (!Array.isArray(favorites)) {
      return res.status(400).json({ message: "Favoritos debe ser un array" });
    }
    await Favorite.insertMany(favorites, { ordered: false });
    res.status(201).json({ message: "Favoritos guardados con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar favoritos", error });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener favoritos", error });
  }
};
