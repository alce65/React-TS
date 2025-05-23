import { act, render, screen } from '@testing-library/react';
import type { Mock} from 'vitest';
import '@testing-library/jest-dom';
import type { Note } from '../../types/note';
import { NoteList2 } from './note-list';
import { getNotes } from '../../services/repo.notes';

// vi.mock('../../services/repo.notes', () => ({
//     getNotes: vi.fn(() => Promise.resolve([
//         {
//             id: "1",
//             title: "Nota 1",
//             content: "Contenido de la nota 1",
//             isImportant: false,
//         },
//     ])),
// }));

vi.mock('../../services/repo.notes');

describe('NoteList1', () => {
    const notes: Note[] = [
        {
            id: '1',
            title: 'Nota 1',
            content: 'Contenido de la nota 1',
            isImportant: false,
        },
    ];

    (getNotes as Mock).mockResolvedValue(notes);

    describe('render', () => {
        beforeEach(async () => {
            await act(async () => {
                render(<NoteList2 />);
            });
        });

        it('should render the note list correctly', () => {
            // Render the component with the notes
            // Check if the notes are displayed correctly
            expect(screen.getByText('Nota 1')).toBeInTheDocument();
        });

        it('should render addNote component', () => {
            const addNote = screen.getByText('Añadir nota');
            expect(addNote).toBeInTheDocument();
        });
    });
});
