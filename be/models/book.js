const mongoose = require("mongoose"); //initializing mongoose
const schema = mongoose.Schema;

const bookSchema = new schema({
  Title: {
    type: String, //book title
    required: true,
  },
  Author: {
    type: String, //book author name
  },
  Description: {
    type: String, //brief description about the book
  },
  image: {
    type: String, //book image
  },
});

const Book = mongoose.model("books", bookSchema);
module.exports = Book; //exporting the model to be accesed by other folders
