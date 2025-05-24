---
Title: "Curso de react desde cero"
Author: "Midudev"
url: "https://cursoreact.dev/01-react-desde-cero"
repo: "https://github.com/midudev/aprendiendo-react"
---

- [1 ¿Qué es React? Desde cero](#1-qué-es-react-desde-cero)
- [2 Eventos, efectos y estados en React](#2-eventos-efectos-y-estados-en-react)
- [3 Prueba técnica con Promesas, fetching y testing E2E (1)](#3-prueba-técnica-con-promesas-fetching-y-testing-e2e-1)
- [4 Prueba técnica (2): Crea tus propios hooks en React + Testing E2E](#4-prueba-técnica-2-crea-tus-propios-hooks-en-react--testing-e2e)
- [5 useCallback, useMemo y useRef](#5-usecallback-usememo-y-useref)
- [6 Estado global con useContext y useReducer](#6-estado-global-con-usecontext-y-usereducer)
- [7 Creación de un React Router desde cero](#7-creación-de-un-react-router-desde-cero)
- [8 Todo App con TypeScript y animaciones](#8-todo-app-con-typescript-y-animaciones)
- [9 Crear un Google Translate con ChatGPT y TypeScript](#9-crear-un-google-translate-con-chatgpt-y-typescript)
- [10 Crear un CRUD con Redux Toolkit y TypeScript](#10-crear-un-crud-con-redux-toolkit-y-typescript)
- [11 Prueba Técnica con TypeScript y React](#11-prueba-técnica-con-typescript-y-react)
- [12 React Query](#12-react-query)
- [13 JavaScript Quiz con Zustand y TypeScript](#13-javascript-quiz-con-zustand-y-typescript)
- [14 Aprende las Novedades de React 19](#14-aprende-las-novedades-de-react-19)

## 1 ¿Qué es React? Desde cero

00:00 - Introducción
01:30 - ¿Qué es React? - Aviso sobre la documentación
07:10 - ¿De dónde sale React?
09:39 - 7 razones para aprender React
18:50 - ¿Por qué React? Creando un botón sin React
26:38 - Cómo usar React sin dependencias
30:00 - Crea tu primer elemento
31:45 - Elemento con atributos
34:30 - Fragment

36:00 - JSX desde cero
44:00 - Crea tu primera aplicación con React

- Mono-repositorio multi-paquete
- Se crea la carpeta contenedora y se ejecuta el comando `npm init -y`
- Dentro se crea la carpeta `projects` y 
- Dentro de ella se ejecuta  `npm create vite@latest` para crear el proyecto
- Se elige la plantilla de React y la de JS-SWC

54:00 - Crear componentes en React

58:20 - Tu primer proyecto práctico con React: **A quien seguir**
01:02:50 - Estilos en React
01:09:29 - Reutilización de componentes: **Props**
01:14:15 - Estila contenedor para separaciones y no componentes
01:15:50 - Pasando booleanos como props
01:18:30 - Pasando funciones como props
01:21:20 - Elementos como props
01:23:10 - Diferencia entre elemento y componente
01:24:50 - Las props son inmutables
01:26:50 - La prop especial **children**
01:34:00 - Pasar objeto como props: destructuración
01:36:27 - **State** en React: useState

## 2 Eventos, efectos y estados en React

00:00 - Introducción
00:30 - Inicialización del proyecto: **vite**. Tic-Tac-Toe
03:45 - Sobre los estilos del proyecto
06:18 - Dibujando el tablero
11:00 - Inicializar el estado
13:50 - Estado con los turnos
16:10 - Actualizando el tablero al hacer click
18:00 - Lógica del tablero
23:00 - Ajustando el final del juego
27:00 - Detectar el ganador
35:35 - El estado es asíncrono
41:09 - Cómo crear el reset del juego
46:35 - Lanzar confetti cuando gane la partida
53:30 - Buenas prácticas separación de constante
54:55 - Persistir la partida en **localStorage**
01:05:16 - No puedes usar localStorage en el servidor
01:07:20 - Aprende el hook **useEffect**
01:16:40 - Configurar **linter** para monorepo
01:21:52 - Creamos el segundo proyecto: mouse-follower. Aprendemos useEffect
01:32:23 - Limpiando efectos
01:41:19 - ¿Por qué se ejecuta dos veces el efecto? - Modo estricto
01:44:10 - React Developer Tools

## 3 Prueba técnica con Promesas, fetching y testing E2E (1)

00:00 - Introducción
04:15 - Enunciado de la prueba técnica
08:30 - Iniciamos el proyecto: **vite** sin **react**
11:25 - Instalando dependencias básicas - plugin de react - react - react-dom - config de vite con react
13:30 - Punto de entrada de nuestra aplicación
15:00 - JSX
16:20 - ¡Instala el linter! Es un momento
18:50 - Crear el componente React
20:30 - Crear nuestro primer estado
24:20 - Estrategia al afrontar la prueba y las APIs
30:35 - Preguntas del chat
37:25 - Seguimos con el segundo enunciado
43:45 - Sobre usar console.log en entrevistas
49:30 - Cuando te piden más cosas en la entrevista...

## 4 Prueba técnica (2): Crea tus propios hooks en React + Testing E2E

- El Problema: Lógica Repetida y Componentes Enredados
- Intentando Separar Lógica con Funciones Normales
- Solución: Custom Hooks
- Custom Hook para la Imagen: useCatImage
- Custom Hook para el Hecho: useCatFact
- Buenas Prácticas con Custom Hooks
- Testing con Playwright (End-to-End)

## 5 useCallback, useMemo y useRef

00:00 - Introducción
02:38 - Inicializamos el proyecto
04:50 - Truco sobre los estilos
06:20 - Empezamos a escribir código
08:44 - Estilos básicos de nuestra app
11:45 - Truco al usar APIs
18:24 - ¡No hagas esto en React!
23:40 - Evita depender del contrato de la API
26:00 - Crea un custom hook useMovies
30:40 - Manejar formularios y hook useRef
37:37 - Usa formData para recuperar todos los datos del formulario
41:20 - Controlar formularios con React

- Validaciones
- Pre-validaciones

46:45 - Cuidado con leer estados previos
50:00 - Estilar inputs según errores
52:14 - Volvemos a explicar useRef - useRef: Referencia mutable -> persiste entre renders
54:10 - Extraer a useSearch a Custom Hook
56:45 - Usar useRef para detectar cuando es la primera vez
01:03:15 - Estilar como grid los resultados
01:10:55 - Fetching de datos
01:18:10 - Extraer lógica a servicio
01:25:35 - Evitar la misma búsqueda con useRef
01:34:05 - Ordenar películas por año de lanzamiento
01:39:00 - Cómo usar useMemo para mejorar rendimiento y evitar cálculos
01:45:10 - Usar useMemo para evitar recrear función en cada render
01:52:30 - Cómo usar useCallback
01:57:00 - Crear una función debounce desde cero

## 6 Estado global con useContext y useReducer

00:00 - Introducción, iniciar proyecto e instalación dependencias
02:40 - Limpiar el código que viene por defecto
03:25 - Copia de iconos
03:55 - Listar Productos de la tienda
10:40 - Añadir filtros de la tienda

- Creamos un custom hook `useFilters`, conn el estado y su setter
- App renderiza el custom hook `useFilters`
- App pasa el estado y el setter a los componentes
- Aparece el problema del **prop drilling**: pasar props de un componente a otro, que no son padres e hijos

19:12 - Estilando los filtros
20:54 - Mejorando filtro rango
22:15 - Hacer que los filtros funcionen
29:46 - Prop Drilling
32:30 - useId, para crear identificadores
37:50 - useContext, crear contextos en React y para qué sirve

- Empieza por un contexto estático
- El custom hook `useFilters` lee del contexto el valor estático de los filtros
- El contexto es una forma de Inyección de dependencias
- Resuelve el problema del prop drilling

55:42 - ¿Cuándo usar useContext?

- El contexto almacena el estado global: `const [filters, setFilters] = useState(initialState)`
- El custom hook `useFilters` lee el contexto y devuelve
  - el estado (los filtros)
  - los productos filtrados
  - el setter de los filtros

57:15 - Evitar prop drilling con useContext

- Los componentes acceden directamente al custom hook `useFilters`
- El custom hook `useFilters` accede al contexto y devuelve el estado y el setter

01:00:10 - Dos fuentes de la verdad. ¿Qué es y cómo arreglarlo?
01:09:41 - Creación de un carrito desde cero
01:12:50 - Crear menú flotante con CSS
01:16:50 - Crear Contexto para el Carrito de la Tienda
01:27:21 - Mostrar visualmente que el producto está añadido al carrito
01:34:34 - Mostrar la info del carrito
01:38:55 - ¿Qué es el método bind y para qué sirve?
01:40:11 - useReducer, manejando estados más complejos

## 7 Creación de un React Router desde cero

00:00 - Introducción e instalación
03:20 - Creamos estructura básica de la aplicación
05:09 - Crear páginas con renderizado condicional
08:08 - Navegación SPA programática
10:54 - Suscripción al evento en el useEffect
13:55 - Truco para diferenciar SPA con MPA
14:45 - Arreglar botón Ir Atrás
17:05 - Refactorización de código
18:26 - Errores al usar un botón en lugar de un enlace
20:00 - Crear el componente Link
24:30 - Añadir funcionalidad de teclado y botón derecho al Link
28:56 - La magia de la prop children
31:15 - Crear componente Router
40:40 - Rutas 404 y rutas por defecto
43:00 - Soportar rutas con parámetros dinámicos
59:15 - Crear componente Route
01:08:15 - Lazy Load de las rutas
01:19:50 - Cómo hacer internacionalización
01:23:00 - Testeando nuestro paquete de Router
01:43:20 - Preparando para hacerlo como paquete publicable
01:51:22 - Iniciar sesión en npm y publicar paquete
01:55:30 - Probando nuestro paquete de Router en otro proyecto

## 8 Todo App con TypeScript y animaciones

## 9 Crear un Google Translate con ChatGPT y TypeScript

## 10 Crear un CRUD con Redux Toolkit y TypeScript

## 11 Prueba Técnica con TypeScript y React

## 12 React Query

## 13 JavaScript Quiz con Zustand y TypeScript

## 14 Aprende las Novedades de React 19
