require("dotenv").config(); // Charger les variables d'environnement depuis .env

const mongoose = require("mongoose");

// Utilisez la variable d'environnement pour la chaîne de connexion
const dbURI = process.env.MONGODB_URI;

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch((e) => {
    console.log("CONNEXION KO !", e);
  });
