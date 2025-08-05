import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Header from '../Header.jsx';
import { MemoryRouter } from 'react-router-dom';

describe("Header", () => {
    it("renders correct links", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
    );
        const links = screen.queryAllByRole("link");
        const linkTexts = links.map(link => link.textContent);
        expect(linkTexts[0]).toMatch(/Home/i);
        expect(linkTexts[1]).toMatch(/Items/i);
        expect(linkTexts[2]).toMatch(/Cart/i);
    });
    it("renders the header with the correct title", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
    );
        const header = screen.getByRole("heading");
        expect(header.textContent).toMatch(/The Odin Shop/i);
    });

})