import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Checkout from "../Checkout.jsx";
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

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
            <Route index element={<Checkout />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getAllByRole("listitem").length).toBe(2);
  })
  it('renders increment buttons'), async () => {
    const mockBoughtCounts = { 3: 7 };
    const mockItems = [
      { id: 1, title: "produce one", price: 1 },
      { id: 2, title: "produce two", price: 10 },
      { id: 3, title: "produce three", price: 100 },
      { id: 4, title: "produce four", price: 1000 },
    ];
    const changeBoughtCountOfId = vi.fn(()=>vi.fn());
    const mockContext = {
      boughtCounts: mockBoughtCounts,
      items: mockItems,
      changeBoughtCountOfId: changeBoughtCountOfId,
    };

    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route path="/cart" element={<Outlet context={mockContext} />}>
            <Route index element={<Checkout />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const plusButton = screen.getByRole("button", { name: /`increase buy count by one`/i });
    const minusButton = screen.getByRole("button", { name: /`decrease buy count by one`/i })
    await user.click(plusButton);

    expect(changeBoughtCountOfId).toBeCalledWith(8);

    await user.click(minusButton);
    expect(changeBoughtCountOfId).toBeCalledTimes(2);
    expect(changeBoughtCountOfId).toBeCalledWith(7);
  }
});