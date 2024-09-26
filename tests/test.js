const Library = require("../src/libraries");

describe("Library Management System", () => {
  let library;

  // Initialize a new library before each test case
  beforeEach(() => {
    library = new Library();
  });

  test("Adding a book to the library", () => {
    // Add a book and check if it has been successfully added
    library.addBook("1", "Textbook1", "reva buche", 2020);
    const availableBooks = library.availableBook();
    
    // The library should now contain 1 available book with the correct title
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0].bookTitle).toBe("Textbook1");
  });

  test("Borrowing a book from the library", () => {
    // Add a book, then borrow it, and verify it's no longer available
    library.addBook("1", "Textbook1", "reva buche", 2020);
    library.borrowBook("1");
    const availableBooks = library.availableBook();

    // No books should be available after borrowing
    expect(availableBooks.length).toBe(0);
  });

  test("Borrowing an already borrowed book throws an error", () => {
    // Try to borrow a book that has already been borrowed
    library.addBook("1", "Textbook1", "reva buche", 2020);
    library.borrowBook("1");

    // Attempting to borrow the same book again should result in an error
    expect(() => library.borrowBook("1")).toThrow("Book is already borrowed");
  });

  test("Returning a borrowed book makes it available again", () => {
    // Add a book, borrow it, then return it
    library.addBook("1", "Textbook1", "reva buche", 2020);
    library.borrowBook("1");
    library.returnBook("1");

    // The book should be available for borrowing again
    const availableBooks = library.availableBook();
    expect(availableBooks.length).toBe(1);
  });

  test("Returning a non-existent or unborrowed book throws an error", () => {
    // Try to return a book that either does not exist or was not borrowed
    library.addBook("1", "Textbook1", "reva buche", 2020);

    // Returning a book that was never borrowed or does not exist should throw an error
    expect(() => library.returnBook("100")).toThrow("Book not found");
  });
});

