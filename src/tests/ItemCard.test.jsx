import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemCard from "../ItemCard.jsx";
import userEvent from "@testing-library/user-event";

describe("Item Card", () => {
  it("renders image, title, and price", () => {
    const mockImage = "https://via.placeholder.com/150";
    const mockTitle = "Test Item";
    const mockPrice = 10.99;
    const mockSetBoughtCounts = vi.fn();

    render(
      <ItemCard
        img={mockImage}
        title={mockTitle}
        price={mockPrice}
        boughtCount={0}
        setBoughtCount={mockSetBoughtCounts}
      ></ItemCard>
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockImage);

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });
  it("render buy button", async () => {
    const mockImage = "https://via.placeholder.com/150";
    const mockTitle = "Test Item";
    const mockPrice = 10.99;
    const mockSetBoughtCounts = vi.fn();
    const user = userEvent.setup();

    render(
      <ItemCard
        img={mockImage}
        title={mockTitle}
        price={mockPrice}
        boughtCount={0}
        setBoughtCount={mockSetBoughtCounts}
      ></ItemCard>
    );

    // Query the "Buy" button
    const buyButton = screen.getByRole("button", { name: /Add to Cart/i });

    // Assert that the "Buy" button is rendered
    expect(buyButton).toBeInTheDocument();

    // Simulate clicking the "Buy" button
    await user.click(buyButton);

    // Assert that the mock function is called with the correct value
    expect(mockSetBoughtCounts).toHaveBeenCalledTimes(1);
    expect(mockSetBoughtCounts).toHaveBeenCalledWith(1); // Ensure the function is invoked with 1
  });
});
