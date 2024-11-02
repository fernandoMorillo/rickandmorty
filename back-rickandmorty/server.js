const express = require("express");
const connectDB = require("./config/db");
const favoriteRoutes = require("./routes/favoriteRoutes");
const errorHandler = require("./middlewares/errorHandler");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

connectDB();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api", favoriteRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
