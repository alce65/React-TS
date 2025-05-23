import type { Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { useNotes } from './use.notes1';
// import { Note } from "../types/note";
import { getNotes } from '../services/repo.notes';
import type { JSX } from 'react';

vi.mock('../services/repo.notes');

describe('Given custom hook useNotes', () => {
    // const mockNote: Note = {} as Note;

    function TestComponent(): JSX.Element {
        const { notes, loadNotes } = useNotes();
        return (
            <>
                <h1>Test Component</h1>
                <button role="button" onClick={() => loadNotes()}>
                    1
                </button>
                {/* <button role="button" onClick={() => add(mockNote)}>
                    2
                </button>
                <button role="button" onClick={() => update(mockNote)}>
                    3
                </button>
                <button role="button" onClick={() => erase(mockNote)}>
                    4
                </button> 
                <p>LoadState: {loadState}</p>*/}
                <p>Element 1 ID: {notes[0]?.id}</p>
            </>
        );
    }
    describe('When the component run the hook', () => {
        beforeEach(() => {
            (getNotes as Mock).mockResolvedValue([{ id: '101' }]);
            render(<TestComponent></TestComponent>);
        });

        test('The component should be in the document', () => {
            const h1Element = screen.getByRole('heading');
            expect(h1Element).toBeInTheDocument();
        });

        test('If we click button 1 new state should be render', async () => {
            const buttons = screen.getAllByRole('button');
            await userEvent.click(buttons[0]);
            // const loadElement = await screen.findByText("LoadState: Loaded");
            // expect(loadElement).toBeInTheDocument();
            const notesElement = await screen.findByText(/101/);
            expect(notesElement).toBeInTheDocument();
        });
    });

    describe('When the component run the hook with errors', () => {
        vi.spyOn(console, 'error');
        beforeEach(() => {
            (getNotes as Mock).mockRejectedValueOnce(
                new Error('Get All Error'),
            );
            render(<TestComponent></TestComponent>);
        });
        test('If we click button 1 error should send to console', async () => {
            const buttons = screen.getAllByRole('button');
            await userEvent.click(buttons[0]);
            expect(console.error).toHaveBeenCalledWith(
                'Error al cargar las notas',
                'Get All Error',
            );
        });
    });
});
