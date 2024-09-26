const Book = require("./books");

class Library {
  /**
   * This class represents a Library system that manages books.
   */

  constructor() {
    /**
     * Initializes a new Library object.
     * The library starts with an empty collection of books.
     */
    this.books = [];
  }

  addBook(bookId, bookTitle, bookAuthor, publicationYear) {
    /**
     * Adds a new book to the library collection.
     */
    const book = new Book(bookId, bookTitle, bookAuthor, publicationYear);
    this.books.push(book);
  }

  borrowBook(bookId) {
    /**
     * Marks a specific book as borrowed from the library.
     */
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
    /**
     * Marks a specific book as returned to the library.
     */
    const book = this.books.find((book) => book.bookId === bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    if (!book.isBorrow) {
      throw new Error("Book was not borrowed");
    }
    book.isBorrow = false;
  }

  availableBook() {
    /**
     * Returns a list of all available books in the library.
     */
    return this.books.filter((book) => !book.isBorrow);
  }
}

module.exports = Library;
