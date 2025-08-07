import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemCard from "../ItemCard.jsx";
import userEvent from "@testing-library/user-event";

describe("Item Card", () => {
  it("renders image, title, and price", () => {
    const mockImage = "https://via.placeholder.com/150";
    const mockTitle = "Test Item";
    const mockPrice = "$10.99";
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
  it("render buy button if bought count is 0", async () => {
    const mockImage = "https://via.placeholder.com/150";
    const mockTitle = "Test Item";
    const mockPrice = "$10.99";
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
    const buyButton = screen.getByRole("button", { name: /buy/i });

    // Assert that the "Buy" button is rendered
    expect(buyButton).toBeInTheDocument();

    // Simulate clicking the "Buy" button
    await user.click(buyButton);

    // Assert that the mock function is called with the correct value
    expect(mockSetBoughtCounts).toHaveBeenCalledTimes(1);
    expect(mockSetBoughtCounts).toHaveBeenCalledWith(1); // Ensure the function is invoked with 1
  });
  it("render increment/decrement buttons and bought count if bought count > 0", async () => {
    const mockImage = "https://via.placeholder.com/150";
    const mockTitle = "Test Item";
    const mockPrice = "$10.99";
    const mockSetBoughtCounts = vi.fn();
    const mockBoughtCount = 2;

    render(
      <ItemCard
        img={mockImage}
        title={mockTitle}
        price={mockPrice}
        boughtCount={mockBoughtCount}
        setBoughtCounts={mockSetBoughtCounts}
      ></ItemCard>
    );

    console.log(screen.debug());

    const incrementButton = screen.getByRole("button", {
      name: /increase buy count/i,
    });
    const decrementButton = screen.getByRole("button", {
      name: /decrease buy count/i,
    });
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    const boughtText = screen.getByText("2");
    expect(boughtText).toBeInTheDocument();

  });
  /* IMPLEMENT TEST WITH MOCKS
  it("decrement and increment buttons calls appropriate functions", async () => {
    const mockImage = "https://via.placeholder.com/150";
    const mockTitle = "Test Item";
    const mockPrice = "$10.99";
    const mockSetBoughtCounts = vi.fn((x) => vi.fn((y) => x + y));
    const mockBoughtCount = 2;


    render(
      <ItemCard
        img={mockImage}
        title={mockTitle}
        price={mockPrice}
        boughtCount={mockBoughtCount}
        setBoughtCounts={()=>mockSetBoughtCounts(1)}
      />
    );

    const incrementButton = screen.getByRole("button", {
      name: /increase buy count/i,
    });
    const decrementButton = screen.getByRole("button", {
      name: /decrease buy count/i,
    });


    const user = userEvent.setup();
    await user.click(incrementButton);
    expect(mockSetBoughtCounts(1)).toHaveBeenCalledTimes(1);
    expect(mockSetBoughtCounts).toHaveBeenCalledWith(mockBoughtCount+1);
    await user.click(decrementButton);
    expect(mockSetBoughtCounts(1)).toHaveBeenCalledTimes(2);
    expect(mockSetBoughtCounts).toHaveBeenCalledWith(mockBoughtCount-1);
  });
  */
});
