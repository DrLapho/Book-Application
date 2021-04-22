const Book = require("../models/book");

//adding a new book
exports.addBook = (req, res) => {
  Book.create(req.body).then((data) => {
    res.json(data);
  });
};
//get all books from the database
exports.getBooks = (req, res) => {
  Book.find({}).then((data) => {
    res.json(data);
  });
};
