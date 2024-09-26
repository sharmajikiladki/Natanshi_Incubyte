const Library = require("../src/libraries");

describe("Library Management System", () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  test("Adding", () => {
    library.addBook("1", "Textbook1", "reva buche", 2020);
    const temp1 = library.availableBook();
    expect(temp1.length).toBe(1);
    expect(temp1[0].bookTitle).toBe("Textbook1"); // Changed `title` to `bookTitle`
  });

  test("Borrowing", () => {
    library.addBook("1", "Textbook1", "reva buche", 2020);
    library.borrowBook("1"); // Updated to correct method name
    const temp2 = library.availableBook();
    expect(temp2.length).toBe(0); // Updated to check temp2 instead of undefined variable
  });

  test("Unavailable book error", () => {
    library.addBook("1", "Textbook1", "reva buche", 2020);
    library.borrowBook("1"); // Updated to correct method name
    expect(() => library.borrowBook("1")).toThrow("Book is already borrowed"); // Updated error message
  });

  test("Returning book", () => {
    library.addBook("1", "Textbook1", "reva buche", 2020);
    library.borrowBook("1"); // Updated to correct method name
    library.returnBook("1"); // Updated to correct method name
    const temp3 = library.availableBook();
    expect(temp3.length).toBe(1);
  });

  test("Returning a nonborrowed book", () => {
    library.addBook("1", "Textbook1", "reva buche", 2020);
    expect(() => library.returnBook("100")).toThrow("Book not found"); // Updated error message
  });
});
