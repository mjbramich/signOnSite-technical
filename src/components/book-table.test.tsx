import { render, screen } from "@testing-library/react";
import BookTable from "./book-table";
import { Book } from "@/types";

describe("BookTable component", () => {
  it("Should render a list of books when data is available", () => {
    const books = [
      {
        id: "1",
        title: "Book 1",
        owner: "Owner 1",
        available: true,
      },
      {
        id: "2",
        title: "Book 2",
        owner: "Owner 2",
        available: false,
      },
    ];
    // Arrange
    render(<BookTable books={books} />);

    // Act
    const book1 = screen.getByText("Book 1");
    const book2 = screen.getByText("Book 2");

    // Assert
    expect(book1).toBeInTheDocument();
    expect(book2).toBeInTheDocument();
  });

  it("Should render a message when data is not available", () => {
    const books: Book[] = [];

    render(<BookTable books={books} />);

    const noBooksMessage = screen.getByText("No books found");

    expect(noBooksMessage).toBeInTheDocument();
  });
});
