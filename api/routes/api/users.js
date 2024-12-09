const UserModel = require("../../database/models/user.model");
const bcrypt = require("bcrypt");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  // Nouveau champ `status` avec une valeur par défaut
  const newUser = new UserModel({
    name,
    email,
    password: await bcrypt.hash(password, 8),
    status: req.body.status || "0", // Prend la valeur fournie ou "0" par défaut
  });

  try {
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      res.status(400).json("Email déjà utilisé");
    } else {
      res.status(400).json("Oops une erreur est survenue");
    }
  }
});

module.exports = router;
