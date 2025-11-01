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

## Testing

En los ficheros de test unitarios (Vitest + React Testing Library), con extensión tsx, seguir las mismas instrucciones que en los ficheros de componentes React con TypeScript.

Además, para las importaciones de testing, seguir estas pautas:

- Usar importaciones nombradas siempre que sea posible.

  Ejemplo preferido:

  ```tsx
  import { render, screen } from '@testing-library/react';
  ```

- Empezar siempre con el import anterior para las utilidades de testing de React Testing Library.

- Evitar importaciones por defecto que añadan ruido.
  Es inevitable usarla en el caso de userEvent.

  Ejemplo a evitar:

  ```tsx
  import userEvent from '@testing-library/user-event';
  ```

En el desarrollo del test:

- No incluir "Vitest" en la descripción. Ya se sabe que testamos todo con vitest
- Usar siempre function para definir los test (`test`, `test`, `describe`).
- Usar siempre `test` en lugar de `it`.
- Usar descripciones en ingles, igual que los nombres de variables.
- usar beforeEach para renderizar el componente y afterEach para la configuración y limpieza común.
- guardar el resultado de screen.getBy... en variables para su uso posterior.

Ejemplo:

```tsx
describe('MyComponent', function () {
  beforeEach(function () {
    render(<MyComponent />);
  });

  afterEach(function () {
    // limpieza común si es necesaria
  });

  test('debe hacer algo', function () {
    // test aquí

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
```
