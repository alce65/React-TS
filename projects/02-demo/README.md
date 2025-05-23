# 02-Demo: React + TypeScript + Vite + Vitest

Proyecto con React, TypeScript y Vite.
Reubicado y modificado el ejemplo inicial.
Dependencias añadidas: vitest, jsdom y testing-library/react.

## Initial project

Por ser parte de un monorepo, de la instalación inicial de Vite con React y TypeScript se elimina

- .gitignore
- eslint.config.js
- el contenido original del readme

## Counters

Demo de un contenedor con 2 contadores:

- state
- props funcionales
- event handler

## Items

Demo de una lista de elementos

- state: array
- rendering iterativo: map
- servicio con fetch por props (getData)
- useEffect -> loadData
- useCallback para loadData, con [getData] como dependencia

## Notas

CRUD de notas implementado con diversas estrategia:

- 01.Basic: estado y funciones del CRUD en el componente padre (NoteList). Mock de notas como prop
- 02.LoadService: mock de servicio usado desde el padre (NoteList) para cargar las notas Se utiliza useEffect
  El resto de la lógica del CRUD se mantiene en el padre (NoteList)
- 03-with-context: se utiliza un contexto que proporciona las notas iniciales
  El resto de la lógica del CRUD se mantiene en el padre (NoteList)
- 04-with-hook-context: se utiliza un contexto como provider de un custom hook.
  Toda la lógica del CRUD esta en el custom hook (useNotes)
