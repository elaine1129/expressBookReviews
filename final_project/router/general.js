const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req,res) => {
    const username = req.params.username;
    const password = req.params.password;

    if (username && password){

    } else {
        res.status(404).json({message: "Unable to register user!"});
    }
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    return res.send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    return res.send(books[isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const author = req.params.author;
    const booksArray = Object.values(books);
    const filteredBook = booksArray.filter((book) => book.author == author)

    if (filteredBook.length > 0){
        return res.send(filteredBook);
    } else {
        return res.send('book not found');
    }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = req.params.title;
    const booksArray = Object.values(books);
    const filteredBook = booksArray.filter((book) => book.title == title);

    if (filteredBook.length > 0){
        return res.send(filteredBook);
    } else {
        return res.send('book not found');
    }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    return res.send(books[isbn].reviews);
});

module.exports.general = public_users;
