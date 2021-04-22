const express = require("express"); // initializing express
const router = express.Router();
const book_controller = require("../controller/book");

router.post("/", book_controller.addBook);
router.get("/", book_controller.getBooks);

module.exports = router;
