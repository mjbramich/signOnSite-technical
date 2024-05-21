import { render, screen } from "@testing-library/react";
import ActionCell from "./action-cell";

describe("ActionCell component", () => {
  it("It should render with available badge when book is available", () => {
    // Arrange
    render(<ActionCell available={true} />);

    // Act
    const availableBadge = screen.getByText("Available");

    // Assert
    expect(availableBadge).toBeInTheDocument();
  });

  it("It should render with unavailable badge when book is not available", () => {

    render(<ActionCell available={false} />);

    const unavailableBadge = screen.getByText("Unavailable");

    expect(unavailableBadge).toBeInTheDocument();
  });

  // TODO: Add more tests for button actions (borrow, return, delete)
});
