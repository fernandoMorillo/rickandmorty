const express = require("express");
const router = express.Router();
const {
  saveFavorites,
  getFavorites,
} = require("../controllers/favoriteController");

router.post("/favorites", saveFavorites);
router.get("/favorites", getFavorites);

module.exports = router;
