import {describe, it, expect} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import Items from '../Items.jsx';
import { MemoryRouter } from 'react-router-dom';


describe('Items Page', () => {
    it('renders 20 ItemCard components', async () => {


        render(
            <MemoryRouter>
                <Items />
            </MemoryRouter>
        );

        await waitFor(()=> {
            const cards = screen.getAllByRole("article");
            expect(cards.length).toBe(20);
        })
    });
});