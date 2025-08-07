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
        expect(screen.getByRole("heading").textContent).toMatch(/The Odin Shop/i);
        expect(screen.getByRole("paragraph").textContent).toMatch(/The best place to shop for web devs/i);

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