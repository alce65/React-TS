---
title: TYPESCRIPT INTERMEDIO = React con TypeScript
module: 5
---

- [🧩 MÓDULO 5: INTEGRACIÓN DE LIBRERÍAS Y HERRAMIENTAS EN REACT CON TYPESCRIPT](#-módulo-5-integración-de-librerías-y-herramientas-en-react-con-typescript)
  - [🎯 Objetivos del módulo](#-objetivos-del-módulo)
  - [📘 Tipado e integración de librerías comunes en React (React Router, Redux, etc.)](#-tipado-e-integración-de-librerías-comunes-en-react-react-router-redux-etc)
  - [🌐 React Router](#-react-router)
  - [📘 Configuración de definiciones de tipos con @types](#-configuración-de-definiciones-de-tipos-con-types)
  - [📘 Optimización de proyectos React-TS con herramientas de construcción como Vite](#-optimización-de-proyectos-react-ts-con-herramientas-de-construcción-como-vite)

## 🧩 MÓDULO 5: INTEGRACIÓN DE LIBRERÍAS Y HERRAMIENTAS EN REACT CON TYPESCRIPT

### 🎯 Objetivos del módulo

- Aprender a integrar librerías populares del ecosistema React con soporte para TypeScript.
- Comprender el uso de definiciones de tipos (`@types`) y su papel en el tipado estático.
- Conocer herramientas de construcción modernas como **Vite**, y su configuración óptima con TypeScript.
- Mejorar la interoperabilidad y productividad en entornos React + TS mediante tooling adecuado.

### 📘 Tipado e integración de librerías comunes en React (React Router, Redux, etc.)

React, al ser una biblioteca flexible, permite la integración de diversas librerías para manejar el enrutamiento, el estado global y otras funcionalidades. A continuación, se presentan algunas de las librerías más comunes y su integración con TypeScript:

- **React Router**: Para manejar el enrutamiento en aplicaciones React. TypeScript proporciona tipos para los componentes de enrutamiento, lo que permite una mejor autocompletación y verificación de tipos al definir rutas y parámetros.
- **Redux**: Para manejar el estado global de la aplicación. TypeScript permite definir tipos para acciones, reducers y el estado global, lo que mejora la mantenibilidad y la legibilidad del código.
- **Axios**: Para realizar solicitudes HTTP. TypeScript permite definir tipos para las respuestas de las API, lo que ayuda a evitar errores al manejar datos asíncronos.
- **Formik**: Para manejar formularios. TypeScript permite definir tipos para los valores del formulario y la validación, lo que mejora la experiencia de desarrollo al trabajar con formularios complejos.
- **Yup**: Para la validación de esquemas. TypeScript permite definir tipos para los esquemas de validación, lo que ayuda a evitar errores al validar datos.
- **React Query**: Para manejar el estado de las consultas. TypeScript permite definir tipos para los datos de las consultas y la caché, lo que mejora la experiencia de desarrollo al trabajar con datos asíncronos.
- **React Hook Form**: Para manejar formularios. TypeScript permite definir tipos para los valores del formulario y la validación, lo que mejora la experiencia de desarrollo al trabajar con formularios complejos.
- **Styled Components**: Para manejar estilos en componentes. TypeScript permite definir tipos para los props de estilo, lo que mejora la experiencia de desarrollo al trabajar con estilos dinámicos.
- **Material-UI**: Para manejar componentes de interfaz de usuario. TypeScript permite definir tipos para los props de los componentes, lo que mejora la experiencia de desarrollo al trabajar con componentes personalizados.
- **React Testing Library**: Para realizar pruebas en componentes. TypeScript permite definir tipos para los props de los componentes y las funciones de prueba, lo que mejora la experiencia de desarrollo al trabajar con pruebas unitarias y de integración.
- **Jest**: Para realizar pruebas en JavaScript. TypeScript permite definir tipos para los mocks y las funciones de prueba, lo que mejora la experiencia de desarrollo al trabajar con pruebas unitarias y de integración.
- **React Intl**: Para manejar la internacionalización. TypeScript permite definir tipos para los mensajes y las configuraciones de localización, lo que mejora la experiencia de desarrollo al trabajar con aplicaciones multilingües.

### 🌐 React Router

[React Router](https://reactrouter.com/home) es una biblioteca de enrutamiento para aplicaciones React. Permite definir rutas y manejar la navegación entre diferentes vistas de la aplicación. Con TypeScript, se pueden definir tipos para las rutas y los parámetros, lo que mejora el autocompletado y la verificación de tipos al trabajar con rutas.

React Router es la evolución de react-router-dom, después de haber pasado por el meta-framework de [Remix](https://remix.run/) y en su actual versión 7.x proporciona tres formas diferentes de trabajar (estrategias), incluyendo una API más sencilla y flexible para manejar el enrutamiento en aplicaciones React. Permite definir rutas anidadas, rutas dinámicas y rutas protegidas, lo que facilita la creación de aplicaciones complejas con múltiples vistas.

El **modo declarativo** habilita funciones de enrutamiento básicas, como hacer coincidir URL con componentes, navegar por la aplicación y proporcionar estados activos con API como \<Link>, `useNavigate` y `useLocation`. Corresponde a la forma original de react-router-dom y probablemente siga siendo la forma más común de usar React Router.

```ts
import { BrowserRouter } from "react-router";

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

El **modo Datos**, al mover la configuración de ruta fuera de la representación de React, agrega carga de datos, acciones, estados pendientes y más con API como `loader`, `action`, y `useFetcher`.

```ts
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: loadRootData,
  },
]);

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
```

El **modo Framework** envuelve el modo Data con un complemento Vite para agregar la experiencia completa de React Router con:

- tipo seguro `href`
- API de módulo de ruta de tipo seguro
- división inteligente de código
- Estrategias de SPA, SSR y renderizado estático

Es la forma más avanzada de usar React Router y es la que se recomienda para aplicaciones nuevas, especialmente si son grandes y complejas. Permite una mayor flexibilidad y control sobre el enrutamiento y la carga de datos, lo que facilita la creación de aplicaciones escalables y mantenibles.

```ts
import { index, route } from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("products/:pid", "./product.tsx"),
];
```

Luego tendrá acceso a la API del módulo de ruta con parámetros de tipos seguros, loaderData, división de código, estrategias SPA/SSR/SSG y más.

```ts
import { Route } from "+./types/product.tsx";

export async function loader({ params }: Route.LoaderArgs) {
  let product = await getProduct(params.pid);
  return { product };
}

export default function Product({
  loaderData,
}: Route.ComponentProps) {
  return <div>{loaderData.product.name}</div>;
}
```


### 📘 Configuración de definiciones de tipos con @types

### 📘 Optimización de proyectos React-TS con herramientas de construcción como Vite
