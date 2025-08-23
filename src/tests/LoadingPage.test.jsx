import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import LoadingPage from '../LoadingPage.jsx';
import { MemoryRouter } from 'react-router-dom';

describe("Error Page", () => {
    it("renders a loading message", () => {
        render(
            <MemoryRouter>
                <LoadingPage />
            </MemoryRouter>
    );
        expect(screen.getByRole("heading").textContent).toMatch(/Loading.../i);
    });
})