import {describe, it, expect} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import Items from '../Items.jsx';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';

vi.mock("../CartAside.jsx", () => ({
    default: () => (
      <div data-testid="mock-cart-aside">
        Mocked Cart
      </div>
    ),
  }));

describe('Items Page', () => {
    it('renders 3 ItemCard components for 3 items', async () => {

        const mockContext = {
            items: Array.from({ length: 3 }, (_, i) => ({
              id: i,
              img: `/img-${i}.png`,
              title: `Item ${i}`,
              price: i * 10,
            })),
            boughtCounts: { 0: 1, 1: 2, 2: 3 },
            changeBoughtCountOfId: () => () => {},
          };

        render(
            <MemoryRouter initialEntries={["/items"]}>
              <Routes>
                <Route
                  path="/items"
                  element={<Outlet context={mockContext} />} // <-- provide context here
                >
                  <Route index element={<Items />} />
                </Route>
              </Routes>
            </MemoryRouter>
          );

        await waitFor(()=> {
            const cards = screen.getAllByRole("article");
            expect(cards.length).toBe(3);
        })
    });
    it('renders CartAside component', async () => {

        const mockContext = {
            items: Array.from({ length: 3 }, (_, i) => ({
              id: i,
              img: `/img-${i}.png`,
              title: `Item ${i}`,
              price: i * 10,
            })),
            boughtCounts: { 0: 1, 1: 2, 2: 3 },
            changeBoughtCountOfId: () => () => {},
          };

        render(
            <MemoryRouter initialEntries={["/items"]}>
              <Routes>
                <Route
                  path="/items"
                  element={<Outlet context={mockContext} />} // <-- provide context here
                >
                  <Route index element={<Items />} />
                </Route>
              </Routes>
            </MemoryRouter>
          );

        expect(screen.getByTestId("mock-cart-aside")).toBeInTheDocument();
    });
});