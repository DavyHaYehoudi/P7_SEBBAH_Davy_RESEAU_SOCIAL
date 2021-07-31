const mongoose = require('mongoose');

mongoose
.connect ("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.ppxx9.mongodb.net/projet7MERN",
{
    useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
)
.then(() => console.log("Connexion à MongoDB réussie"))
.catch((err) => console.log("Connexion à MongoDB échouée ", err));