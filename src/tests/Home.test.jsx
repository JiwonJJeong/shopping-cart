import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Home from '../Home.jsx';
import { MemoryRouter } from 'react-router-dom';

describe("Home Page", () => {
    it("renders title text and icon", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
    );
        expect(screen.getByRole("heading", {name: 'The Shop for Web Devs By Web Devs'}).textContent).toMatch(/The Shop for Web Devs/i);

    });
    it("renders link to items", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
    );
        const link = screen.getByRole("link");
        expect(link.textContent).toMatch(/See Products/i);
        expect(link.getAttribute("href")).toBe("/items");
    });
})