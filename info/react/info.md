# React

React es una biblioteca de JavaScript para construir interfaces de usuario. Permite crear componentes reutilizables y gestionar el estado de la aplicación de manera eficiente.

## Instalación de React y TypeScript

Para instalar React y TypeScript, se puede utilizar Vite, un generador de proyectos y empaquetador de código.

Según ellos mismos <https://vite.dev/>

> Vite es una herramienta de creación de frontend increíblemente rápida que impulsa la próxima generación de aplicaciones web

- Un servidor de desarrollo que ofrece mejoras de funciones enriquecidas con respecto a los módulos ES nativos , por ejemplo, un reemplazo de módulo en caliente (HMR) extremadamente rápido .

- Un comando de compilación (builder) que agrupa su código con Rollup , pre-configurado para generar activos estáticos altamente optimizados para producción. Vite puede incorporar en esta fase herramientas como PostCSS, Sass, TypeScript, etc.

- La compatibilidad con frameworks y la integración con otras herramientas se pueden realizar mediante plugins, como sucede en el caso de React

### Creación de un nuevo proyecto con Vite

Para crear un nuevo proyecto con Vite, se puede utilizar el siguiente comando:

```shell
$ npm create vite@latest
```

Esto iniciará un asistente que te guiará a través de la creación del proyecto. Puedes elegir entre diferentes plantillas, como React, Vue, Svelte, etc.

Otra opción es indicar directamente el nombre del proyecto y la plantilla que deseas utilizar. Por ejemplo, para crear un proyecto de React con TypeScript, puedes usar el siguiente comando:

```bash
npm create vite@latest nombre-del-proyecto -- --template react-ts
```

El resultado incluye las siguientes dependencias:

```json
 "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.30.1",
    "vite": "^6.3.5"
  }
```

Como se ve, se han instalado TypeScript, React, ESLint y Vite, como builder.
El archivo `tsconfig.json` se crea automáticamente y contiene la configuración básica para TypeScript. Puedes personalizarlo según tus necesidades.
Lo mismo sucede con el archivo de configuración de ESLint, `eslint.config.js`, y con el del propio `vitest`.

### Instalación de dependencias

Para instalar las dependencias del proyecto, puedes utilizar el siguiente comando:

```bash
npm i
```

Esto instalará todas las dependencias necesarias para el proyecto, incluyendo React, ReactDOM y TypeScript.

### Elementos adicionales

Además de las dependencias básicas, es posible que desees instalar algunas dependencias adicionales para mejorar tu flujo de trabajo.

#### Herramientas de testing

La más habitual de todas ellas es alguna herramienta de testing, como Vitest, que es un framework de pruebas para Vite. Puedes instalarlo con el siguiente comando:

```shell
npm i -D vitest
```

También es necesario ajustar la configuración de ESLint para que funcione con Vitest. Puedes hacerlo agregando el siguiente plugin a tu archivo de configuración de ESLint:

```js
{
  "plugins": ["vitest"]
}
```

Finalmente puede se interesante agregar un script para ejecutar las pruebas en tu archivo `package.json`:

```json
"scripts": {
  "test": "vitest"
}
```

#### Herramientas de edición de código

Otro ajuste que puedes hacer se refiere a la configuración de Prettier, que en principio funciona como plugin de VSC.

```json
{
  "prettier": {
    "singleQuote": true,
    "semi": false,
    "trailingComma": "all",
    "tabWidth": 2,
    "printWidth": 80
  }
}
```

Junto a Prettier, es frecuente definir el comportamiento del editor desde el fichero .editorconfig, que es un estándar de configuración de editores de texto. Puedes crear un archivo `.editorconfig` en la raíz de tu proyecto con el siguiente contenido:

```ini
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
charset = utf-8
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

[*.json]
...
```

En algunos casos, es preferible disponer de una copia local de Prettier en lugar de utilizar la que viene instalada con VSC. Para ello, puedes instalar Prettier como una dependencia de desarrollo:

```shell
npm i -D prettier
```

## Componentes

Los componentes son la base de React. Un componente es una función o clase que devuelve un fragmento de código HTML. Los componentes pueden ser de clase o funcionales.

- Los componentes funcionales son funciones de JavaScript que devuelven JSX. Son la forma habitual de crear componentes en proyectos de React de los últimos años.
- Los componentes de clase son clases de JavaScript que extienden la clase `React.Component` y tienen un método `render()` que devuelve JSX.

**JSX** es una extensión de sintaxis para JavaScript que permite escribir HTML dentro de JavaScript. JSX se compila a JavaScript puro antes de ser ejecutado en el navegador.

- JSX permite escribir HTML de manera más legible y fácil de entender.
- JSX se utiliza para describir cómo debería lucir la interfaz de usuario.
