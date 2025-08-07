import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CartItem from "../CartItem.jsx";
import userEvent from "@testing-library/user-event";

describe("Cart item", () => {
  it("renders image and delete button", () => {
    const mockImage = "https://via.placeholder.com/150";
    const mockPrice = 10.99;
    const mockSetBoughtCounts = vi.fn();
    const mockBoughtCount = 3;
    render(
      <CartItem
        img={mockImage}
        price={mockPrice}
        boughtCount={mockBoughtCount}
        setBoughtCount={mockSetBoughtCounts}
      ></CartItem>
    );
    expect(screen.getByRole("img")).toHaveAttribute("src", mockImage);
    expect(screen.getByRole("button").textContent).toBe("🗑️");
  });
  it("renders a calculated total price", () => {
    const mockPrice = 10.99;
    const mockSetBoughtCounts = vi.fn();
    const mockBoughtCount = 3;
    render(
      <CartItem
        price={mockPrice}
        boughtCount={mockBoughtCount}
        setBoughtCount={mockSetBoughtCounts}
      ></CartItem>
    );
    expect(screen.getByRole("paragraph").textContent).toMatch("$32.97");
  });
  it("clicking delete button calls setBoughtCount(0)", async () => {
    const mockImage = "https://via.placeholder.com/150";
    const mockPrice = 10.99;
    const mockSetBoughtCounts = vi.fn();
    const mockBoughtCount = 3;
    render(
      <CartItem
        img={mockImage}
        price={mockPrice}
        boughtCount={mockBoughtCount}
        setBoughtCount={mockSetBoughtCounts}
      ></CartItem>
    );
    const user = userEvent.setup();
    const trashButton = screen.getByRole("button")
    
    await user.click(trashButton);

    expect(mockSetBoughtCounts).toHaveBeenCalledWith(0);

  });
  it("renders an select list with 10 options and one preselected if boughtCount <10", () => {
    const mockPrice = 10.99;
    const mockSetBoughtCounts = vi.fn();
    const mockBoughtCount = 3;
    render(
      <CartItem
        price={mockPrice}
        boughtCount={mockBoughtCount}
        setBoughtCount={mockSetBoughtCounts}
      ></CartItem>
    );

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(10);

    expect(selectElement.value).toBe(mockBoughtCount.toString());
  });
  it("clicking an option calls setBoughtCount with its value", async () => {
    const mockPrice = 10.99;
    const mockSetBoughtCounts = vi.fn();
    const mockBoughtCount = 3;

    render(
      <CartItem
        price={mockPrice}
        boughtCount={mockBoughtCount}
        setBoughtCount={mockSetBoughtCounts}
      ></CartItem>
    );

    // Find the select element
    const fourthOption = screen.getAllByRole("option")[4];

    const user = userEvent.setup();
    await user.click(fourthOption);

    expect(mockSetBoughtCounts).toHaveBeenCalledWith(4);
  });
  it("renders input form with boughtCount as default if boughtCount >=10", () => {
    const mockPrice = 10.99;
    const mockSetBoughtCounts = vi.fn();
    const mockBoughtCount = 10;

    render(
      <CartItem
        price={mockPrice}
        boughtCount={mockBoughtCount}
        setBoughtCount={mockSetBoughtCounts}
      ></CartItem>
    );

    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement).toBeInTheDocument();

    expect(inputElement.value).toBe(mockBoughtCount.toString());
  });
  it("clicking submit button on form changes bought count with form value", async () => {
    const mockPrice = 10.99;
    const mockSetBoughtCounts = vi.fn();
    const mockBoughtCount = 10;

    render(
      <CartItem
        price={mockPrice}
        boughtCount={mockBoughtCount}
        setBoughtCount={mockSetBoughtCounts}
      ></CartItem>
    );

    const inputElement = screen.getByRole("spinbutton");
    const user = userEvent.setup();

    // Simulate user typing '7' into the input field
    await user.clear(inputElement);
    await user.type(inputElement, "7");

    const submitButton = screen.getByRole("button", { name: /Update/i });
    await user.click(submitButton);

    expect(mockSetBoughtCounts).toHaveBeenCalledWith("7");
  });
});
