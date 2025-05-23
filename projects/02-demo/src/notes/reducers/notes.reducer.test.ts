import type { Note } from '../types/note';
import * as ac from './notes.action.creators';
import { type NotesState, notesReducer } from './notes.reducer';

describe('Given the function notesReducer', () => {
    describe('When it receives the action load ', () => {
        test('The state should be the action payload', () => {
            // Arrange
            const payloadMock = [{ id: '1' } as Note];
            const action = ac.loadNotesActionCreator(payloadMock);
            // {
            //   type: actionTypeNames.load,
            //   payload: payloadMock,
            // }
            // Act
            const result = notesReducer([], action);
            // Assert
            expect(result).toEqual(payloadMock);
        });
    });

    describe('When it receives an INVALID action ', () => {
        test('The state should be the initial state', () => {
            // Arrange
            const initialState = [] as NotesState;
            const action = {
                type: 'Invalid action' as 'notes@delete',
                payload: '0',
            };
            // Act
            const result = notesReducer(initialState, action);
            //Assert
            expect(result).toEqual(initialState);
        });
    });
});
