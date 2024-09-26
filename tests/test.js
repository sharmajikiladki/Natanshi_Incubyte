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
    expect(temp1[0].title).toBe("Textbook1");
  });

  test("Borrowing", () => {
    library.addBook("1", "Textbook1", "reva buche", 2020);
    library.borrow("1");
    const temp2 = library.available();
    expect(availableBooks.length).toBe(0);
  });

  test("Unavailable book error", () => {
    library.addBook("1", "Textbook1", "reva buche", 2020);
    library.borrow("1");
    expect(() => library.borrow("1")).toThrow("Book already borrowed");
  });
  
  test("Returning book", () => {
    library.addBook("1", "Textbook1", "reva buche", 2020);
    library.borrow("1");
    library.returnB("1");
    const temp3 = library.available();
    expect(temp3.length).toBe(1);
  });

  test("Returning a nonborrowed book", () => {
    library.addBook("1", "Textbook1", "reva buche", 2020);
    expect(() => library.returnB("100")).toThrow("Book not present");
  });
});