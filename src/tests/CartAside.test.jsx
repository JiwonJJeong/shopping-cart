import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CartAside from "../CartAside.jsx";
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';

vi.mock("../CartItem.jsx", () => ({
  default: () => <div data-testid="mock-cart-item" />,
}));


describe("Cart aside", () => {
  it("renders 2 cart items if there are 2 bought items", () => {
    const mockBoughtCounts = { 1: 2, 3: 4 };
    const mockItems = [
      { id: 1, title: "produce one", price: 1 },
      { id: 2, title: "produce two", price: 10 },
      { id: 3, title: "produce three", price: 100 },
      { id: 4, title: "produce four", price: 1000 },
    ];
    const changeBoughtCountOfId = vi.fn();
    const mockContext = {
      boughtCounts: mockBoughtCounts,
      items: mockItems,
      changeBoughtCountOfId: changeBoughtCountOfId,
    };

    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route path="/cart" element={<Outlet context={mockContext} />}>
            <Route index element={<CartAside />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getAllByTestId("mock-cart-item").length).toBe(2);
  });
  it("renders static elements as expected", () => {
    const mockBoughtCounts = { 1: 2, 3: 4 };
    const mockItems = [
      { id: 1, title: "produce one", price: 1 },
      { id: 2, title: "produce two", price: 10 },
      { id: 3, title: "produce three", price: 100 },
      { id: 4, title: "produce four", price: 1000 },
    ];
    const changeBoughtCountOfId = vi.fn();
    const mockContext = {
      boughtCounts: mockBoughtCounts,
      items: mockItems,
      changeBoughtCountOfId: changeBoughtCountOfId,
    };
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route path="/cart" element={<Outlet context={mockContext} />}>
            <Route index element={<CartAside />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole("heading")).toHaveTextContent("Cart");

    const cartLink = screen.getByRole("link");
    expect(cartLink).toHaveTextContent("Go to Cart");
    expect(cartLink.getAttribute("href")).toBe("/checkout");
  });
  it("renders total price when nonzero", () => {
    const mockBoughtCounts = { 1: 2, 3: 4 };
    const mockItems = [
      { id: 1, title: "produce one", price: 1 },
      { id: 2, title: "produce two", price: 10 },
      { id: 3, title: "produce three", price: 100 },
      { id: 4, title: "produce four", price: 1000 },
    ];
    const changeBoughtCountOfId = vi.fn();
    const mockContext = {
      boughtCounts: mockBoughtCounts,
      items: mockItems,
      changeBoughtCountOfId: changeBoughtCountOfId,
    };
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route path="/cart" element={<Outlet context={mockContext} />}>
            <Route index element={<CartAside />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole("paragraph").textContent).toMatch("Total: $402.00");
  });
});
