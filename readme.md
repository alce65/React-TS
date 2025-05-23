# React & React with TypeScript

**Mono-repositorio** **multi-paquete** para React con TypeScript.

## Instalación

Se crea un repositorio Git y un package.json en la raíz del proyecto:

Se añade

- un archivo .gitignore para ignorar la carpeta node_modules
- un archivo .editorconfig para la configuración del editor

```ini gitignore
node_modules
coverage
*.lcov
lib-cov
.env
logs
...
```

```ini editorconfig
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = false
```

- la configuración de Prettier se incluye en el package.json
- la configuración del mono-repo se incluye en el package.json, indicando que los proyectos (paquetes) se encuentran en la carpeta projects

```json
{
  "name": "react-typescript-monorepo",
  "private": true,
  "workspaces": ["packages/*"],
  "prettier": {
    "singleQuote": true
  }
}
```
