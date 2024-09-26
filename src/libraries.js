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
     * 
     * This function creates a new Book object using the provided details: 
     * - A unique identifier for the book.
     * - The title of the book.
     * - The name of the author who wrote the book.
     * - The year the book was published.
     * 
     * Once the book is created, it is added to the library's list of books.
     */
    const book = new Book(bookId, bookTitle, bookAuthor, publicationYear);
    this.books.push(book);
  }

  borrowBook(bookId) {
    /**
     * Marks a specific book as borrowed from the library.
     * 
     * This function searches for a book in the library by its unique identifier.
     * - If the book is found and is not already borrowed, it will be marked as borrowed.
     * - If the book is already borrowed, an error is thrown.
     * - If the book is not found in the library, an error is thrown.
     */
    const book = this.books.find((book) => book.bookId === bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    if (book.isCheckedOut) {
      throw new Error("Book is already checked out");
    }
    book.isCheckedOut = true;
  }

  returnBook(bookId) {
    /**
     * Marks a specific book as returned to the library.
     * 
     * This function searches for a book by its unique identifier:
     * - If the book is found and it is currently borrowed, it will be marked as returned.
     * - If the book is not borrowed, an error is thrown indicating it wasn't borrowed.
     * - If the book is not found in the library, an error is thrown.
     */
    const book = this.books.find((book) => book.bookId === bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    if (!book.isCheckedOut) {
      throw new Error("Book was not checked out");
    }
    book.isCheckedOut = false;
  }

  viewAvailableBooks() {
    /**
     * Returns a list of all available books in the library.
     * 
     * This function filters the list of books and returns those that are not checked out.
     */
    return this.books.filter((book) => !book.isCheckedOut);
  }
}

module.exports = Library;
