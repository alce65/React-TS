 NUNCA añadir `import React from 'react'` en ejemplos de JSX/TSX ni en componentes funcionales.

 Contexto: este repositorio usa la transformación JSX automática (React 17+ / new JSX transform). No incluir la importación por defecto de React en ejemplos, snippets o componentes funcionales.

 Ejemplo de componente preferido (sin import React):

 ```tsx
export function MyComponent() {
	 return <div>Hola</div>;
 }

 ```

 Motivo: Evita ruido en ejemplos y sigue las prácticas actuales de React con JSX automático.

 Nunca añadir `export default` en ejemplos de JSX/TSX ni en componentes funcionales.

 En su lugar usar exportaciones nombradas (`export function ...` o `export const ...`).
