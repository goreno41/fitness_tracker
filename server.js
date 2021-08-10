const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/api");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true  }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

let db = mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/fitnesstrackerDB",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
);

app.use(router);
require("./routes/index")(app);

module.exports = db;