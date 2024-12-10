const mongoose = require("mongoose");

// Mise à jour du schéma utilisateur
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  status: { type: String, default: "0" }, // Ajout du champ status avec une valeur par défaut
});

// Création du modèle utilisateur
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
