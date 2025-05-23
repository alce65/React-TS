import { render, type RenderResult, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { NoteItem2 } from "./note-item";

describe("NoteItem", () => {
    const note = {
        id: "1",
        title: "Nota 1",
        content: "Contenido de la nota 1",
        isImportant: false,
    };

    const deleteNote = vi.fn();
    const updateNote = vi.fn();

    let r: RenderResult;

    beforeEach(() => {
        r = render(
            <NoteItem2
                note={note}
                deleteNote={deleteNote}
                updateNote={updateNote}
            />
        );
    });

    it("should render the note item correctly", () => {
        expect(r.getByText(note.title)).toBeInTheDocument();
        expect(r.getByText(note.content)).toBeInTheDocument();
        expect(r.getByText("No importante")).toBeInTheDocument();
    });

    it("should call deleteNote when the delete button is clicked", () => {
        const deleteButton = screen.getByText("Eliminar");
        deleteButton.click();

        expect(deleteNote).toHaveBeenCalledWith(note.id);
    });

    it("should call updateNote when the checkbox is clicked", async () => {
        const checkbox = screen.getByRole("checkbox");
        await userEvent.click(checkbox);

        expect(updateNote).toHaveBeenCalledWith({
            ...note,
            isImportant: true,
        });
    });
});
