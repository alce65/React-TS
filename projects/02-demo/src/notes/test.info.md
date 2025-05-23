# Implementación y tests

## Notes

- note-item
  - recibe por props note
  - recibe por props las funciones deleteNote y updateNote (jest.fn)
  - testamos que se renderiza el título y el contenido de la nota
  - testamos que se renderiza el botón de eliminar y al hacer click en él
    se llama a la función deleteNote con el id de la nota
  - testamos que al dispararse el change en el checkbox
    se llama a la función updateNote con el nuevo valor de la nota
- note-add
  - recibe por props la función addNote (jest.fn)
  - testamos que se renderiza los inputs y el botón de agregar
  - testamos que podemos escribir en los inputs
  - testamos que al hacer click en el botón de agregar
    se llama a la función addNote con el nuevo valor de la nota
    correspondiente a lo que hemos escrito en los inputs
- note-list
  - recibe por props el array de notas
  - testamos que se renderiza el título de la lista de notas
    del componente note-item
  - testamos que se renderiza el texto "Añadir nota"
    del componente note-add

La funcionalidad de los métodos de NoteList no es fácil de testar desde el punto de vista de testingLibrary sin repetir los tests de los componentes hijos.

El test nos esta sugiriendo una refactorización de los componentes para que sean más simples y testables, llevándonos la lógica a un contesto o a un hook (o ambas cosas).
