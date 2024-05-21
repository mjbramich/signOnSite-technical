import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./pagination";

describe("Pagination component", () => {
  it("Should render with correctly with current page and total pages", () => {
    // Arrange
    render(<Pagination totalPages={3} currentPage={1} setPage={() => {}} />);

    // Act
    const pagination = screen.getByText("Showing Page 1 of 3");

    // Assert
    expect(pagination).toBeInTheDocument();
  });

  it("Should go back to previous page when previous button is clicked", async () => {
    const setPageMock = jest.fn();
    render(<Pagination totalPages={3} currentPage={2} setPage={setPageMock} />);

    const previousButton = screen.getByText("Previous");
    fireEvent.click(previousButton);

    expect(setPageMock).toHaveBeenCalledWith(1);
  });

  it("Should not go back to previous page when on first page", async () => {
    const setPageMock = jest.fn();
    render(<Pagination totalPages={3} currentPage={1} setPage={setPageMock} />);

    const previousButton = screen.getByText("Previous");
    fireEvent.click(previousButton);

    expect(setPageMock).not.toHaveBeenCalled();
  });

  it("Should go forward to next page when next button is clicked", async () => {
    const setPageMock = jest.fn();
    render(<Pagination totalPages={3} currentPage={2} setPage={setPageMock} />);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(setPageMock).toHaveBeenCalledWith(3);
  });

  it("Should not go forward to next page when on last page", async () => {
    const setPageMock = jest.fn();
    render(<Pagination totalPages={3} currentPage={3} setPage={setPageMock} />);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(setPageMock).not.toHaveBeenCalled();
  });
});
