import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import ErrorPage from '../ErrorPage.jsx';
import { MemoryRouter } from 'react-router-dom';

describe("Error Page", () => {
    it("renders an error message", () => {
        render(
            <MemoryRouter>
                <ErrorPage />
            </MemoryRouter>
    );
        expect(screen.getByRole("heading").textContent).toMatch(/This route does not exist!/i);
    });
    it("renders a return link", () => {
        render(
            <MemoryRouter>
                <ErrorPage />
            </MemoryRouter>
    );
        const link = screen.getByRole("link");
        expect(link.textContent).toMatch(/Go back to the homepage/i);
        expect(link.getAttribute("href")).toBe("/");
    });

})