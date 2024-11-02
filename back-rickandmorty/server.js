const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose
  .connect("mongodb://localhost:27017/favoritesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos MongoDB");
  })
  .catch((err) => {
    console.error("Error de conexión:", err);
  });

// Definir el esquema de favoritos
const favoriteSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  status: String,
  species: String,
  gender: String,
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

// Rutas
app.post("/favorites", async (req, res) => {
  try {
    const favorites = req.body.favorites;
    if (!Array.isArray(favorites)) {
      return res.status(400).json({ message: "Favoritos debe ser un array" });
    }
    await Favorite.insertMany(favorites, { ordered: false });
    res.status(201).json({ message: "Favoritos guardados con éxito" });
  } catch (err) {
    res.status(500).json({ message: "Error al guardar favoritos", error: err });
  }
});

app.get("/favorites", async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener favoritos", error: err });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
