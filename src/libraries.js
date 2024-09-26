const Book = require("./books");

class Library {
  //This class represents a Library system that manages all the books.

  constructor() {
    //here we do the initialization of the object
    // it starts with empty collection of books
    this.books = [];
  }

  addBook(bookId, bookTitle, bookAuthor, publicationYear) {
    //adds a new book to the collection 
    const book = new Book(bookId, bookTitle, bookAuthor, publicationYear);
    this.books.push(book);
  }

  borrowBook(bookId) {
    //here we mark a specific book that is borrowed from library
    const book = this.books.find((book) => book.bookId === bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    if (book.isBorrow) {
      throw new Error("Book is already borrowed");
    }
    book.isBorrow = true;
  }

  returnBook(bookId) {
    //marks for specific books as returned to the library
    const book = this.books.find((book) => book.bookId === bookId); //finding the book and handling the cases
    if (!book) {
      throw new Error("Book not found"); //book not found
    }
    if (!book.isBorrow) {
      throw new Error("Book was not borrowed"); //check for borrow
    }
    book.isBorrow = false;
  }

  availableBook() {

    //here it returns a list of all available books in the library
    return this.books.filter((book) => !book.isBorrow);
  }
}

module.exports = Library;
