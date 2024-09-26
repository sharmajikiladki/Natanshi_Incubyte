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
});