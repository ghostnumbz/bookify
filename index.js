// import dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");


// empty array to store books
let books = [];

//middleware -1
app.use(bodyParser.json());

//middleware -2
app.use(function (req, res, next) {
    if (req.url !== "/favicon.ico") {
        console.log(`method: ${req.method} url: ${req.url}`);
    }
    next();
});

// To get all books
app.get("/books", function (req, res) {
    return res.json({ books });
});

// To get a book by id
app.get("/books/:bookId", function (req, res) {
    const id = req.params.bookId;
    const book = books.find((e) => e.id === Number(id));
    return res.json({ book });
});

// To add a book
app.post("/book", function (req, res) {
    const bookFromClient = req.body;
    books.push(bookFromClient);
    res.json({ status: "success" });
});

// To delete a book
app.delete("/book/:bookId", function (req, res) {
    const bookIDToDelete = req.params.bookId;
    books = books.filter((e) => e.id !== Number(bookIDToDelete));
    return res.json({ status: "deleted" });
});

// start server
app.listen(8000, () => {
    console.log("server started ");
});
