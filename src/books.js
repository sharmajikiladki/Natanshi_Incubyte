class Book {
    /**
     * This is a class for a Book.
     */

    constructor(bookId, bookTitle, bookAuthor, publicationYear) {
       /**
         * Initializes a new Book object with the following details:
         * - A unique identifier for the book (bookId).
         * - The title of the book (bookTitle).
         * - The name of the author who wrote the book (bookAuthor).
         * - The year the book was published (publicationYear).
         * 
         * By default, the book is not borrowed.
         */
        
        this.bookId = bookId;
         this.bookTitle = bookTitle;
         this.bookAuthor = bookAuthor;
         this.publicationYear = publicationYear;
         this.isBorrow = false;
    }
}

module.exports = Book;