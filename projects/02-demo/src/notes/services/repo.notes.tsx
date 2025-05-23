import { NOTES } from '../data/notes';
import type { DTONote, Note } from '../types/note';

const notes = NOTES;

export const getNotes = async (): Promise<Note[]> => notes;

export const addNote = async (note: DTONote): Promise<Note> => {
    const newNote: Note = {
        ...note,
        id: crypto.randomUUID(),
    };
    notes.push(newNote);
    return newNote;
};

export const deleteNote = async (id: string): Promise<void> => {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
    }
};

export const updateNote = async (note: Note): Promise<Note> => {
    const index = notes.findIndex((n) => n.id === note.id);
    if (index !== -1) {
        notes[index] = note;
    }
    return note;
};
