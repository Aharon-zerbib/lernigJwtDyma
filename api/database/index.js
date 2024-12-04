const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://jean:123@cluster0.eiw9d.mongodb.net/ronrons?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch((e) => {
    console.log("CONNEXION KO !", e);
  });
