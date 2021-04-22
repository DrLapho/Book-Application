// import required dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const bookRouter = require("./routes/book");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000; // initializing port
const connection_string =
  process.env.CONNECTION_STRING || "mongodb://localhost/book-app";

// use middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/books", bookRouter);

//connecting to mongoDB
mongoose.connect(connection_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", function () {
    console.log("Connected"); // on connection message
  })
  .on("error", function () {
    console.log("Connection Error", error); // on connection error
  });

// server listen
app.listen(PORT, () => console.log(`Server up on Port: ${PORT}`));
