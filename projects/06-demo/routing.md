# React Router

En sus versiones 7.x existen tres estrategias de uso:

- Declarativa
- Data (Programática)
- Framework

- [React Router](#react-router)
  - [Declarativa](#declarativa)
    - [Provider y Rutas](#provider-y-rutas)
      - [Test de App](#test-de-app)
    - [Fichero de rutas](#fichero-de-rutas)
      - [Test de rutas](#test-de-rutas)
    - [Rutas anidadas](#rutas-anidadas)
      - [Componente Layout](#componente-layout)
      - [Test del componente Layout](#test-del-componente-layout)
      - [Componente App](#componente-app)
      - [Rutas Anidadas](#rutas-anidadas-1)
    - [Menu y navegación](#menu-y-navegación)

## Declarativa

### Provider y Rutas

En el fichero main se añade un provider de las rutas:

```tsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

En el fichero App se definen las rutas:

```tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
export default App;
```

#### Test de App

Al depender del proveedor de rutas, se debe envolver el componente a testar en un `MemoryRouter`:

```tsx
import { render } from '@testing-library/react';
import App from './App';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';
import { MemoryRouter } from 'react-router';

vi.mock('./core/components/header/header');
vi.mock('./core/components/footer/footer');

describe('App component', () => {
  test('should call components Header and Footer', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(Header).toHaveBeenCalled();
    expect(Footer).toHaveBeenCalled();
  });
});
```

Lo que testamos es que es capaz de llamar a los componentes `Header` y `Footer`, que son parte del layout de la aplicación.

### Fichero de rutas

Para evitar que el fichero `App.tsx` crezca, se pueden definir las rutas en un fichero separado:

```tsx
import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';
import { Route, Routes } from 'react-router';
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};
```

Luego se importa en el fichero `App.tsx` como un componente más.

#### Test de rutas

Para testar las rutas, se puede hacer de forma similar al test de `App.tsx`, envolviendo el componente en un `MemoryRouter`:
(Opcionalmente en el test de App podemos crear un mock del componente `AppRoutes` y eliminar el proveedor de rutas)

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AppRoutes } from './app-routes';
import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';

vi.mock('../../features/home/home');
vi.mock('../../features/about/about');

describe('App component', () => {
  test('should render info for invalid routes', () => {
    render(
      <MemoryRouter initialEntries={['/invalid-route']}>
        <AppRoutes />
      </MemoryRouter>,
    );
    const element = screen.getByText('404 Not Found');
    expect(element).toBeInTheDocument();
  });

  test('should route to home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>,
    );
    expect(Home).toHaveBeenCalled();
  });
  test('should route to about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(About).toHaveBeenCalled();
  });
});
```

### Rutas anidadas

Las mismas rutas se pueden definir de forma anidada, creando un nuevo componente Layout que se encargue de renderizar las rutas hijas.

#### Componente Layout

```tsx
type Props = {
  children: JSX.Element;
  title: string;
};
export const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};
```

#### Test del componente Layout

Recupera en parte el que antes era test de App, ya que ahora es el Layout quien monta Header y Footer

```tsx
vi.mock('../header/header');
vi.mock('../footer/footer');

describe('Layout component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Layout title="Demo 06">
          <div>Test Content</div>
        </Layout>
      </MemoryRouter>,
    );
  });

  test('should render children content', () => {
    const content = document.querySelector('.main');
    expect(content).toBeInTheDocument();
    expect(content?.textContent).toBe('Test Content');
  });

  test('should call components Header and Footer', () => {
    expect(Header).toHaveBeenCalled();
    expect(Footer).toHaveBeenCalled();
  });
});
```

#### Componente App

El componente `App` ahora utiliza el componente `Layout` para envolver las rutas:

```tsx
export const App: React.FC = () => {
  const title = import.meta.env.VITE_APP_TITLE || 'Demo 06 - Routes';

  return (
    <>
      <Layout title={title}>
        <AppRoutes />
      </Layout>
    </>
  );
};
```

Siguiendo la forma de hacer los tests, el test de `App` se puede simplificar, ya que no es necesario comprobar que se llaman a los componentes `Header` y `Footer`, ya que ahora son parte del `Layout`.

```tsx
vi.mock('../layout/layout', () => ({
  Layout: vi.fn(({ children }) => <div>{children}</div>),
}));
vi.mock('../../routes/app-routes');

describe('App component', () => {
  test('should call components Header and Footer', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(AppRoutes).toHaveBeenCalled();
    expect(Layout).toHaveBeenCalled();
  });
});
```

En este caso, el mock del layout tiene que implementarse para que reciba los hijos, ya que el componente `App` los pasa como tal.

#### Rutas Anidadas

El componente Layout, puede integrarse en las rutas y anidar las rutas hijas. Para ello se sustituye el children por un elemento `Outlet` de React Router, que se encargará de renderizar las rutas hijas.

```tsx
type Props = {
  title?: string;
};
export const Layout: React.FC<Props> = ({ title = '' }) => {
  return (
    <>
      <Header title={title} />
      <main className="main">
        {/* This is where the child components will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
```

Su test tanbién se simplifica al no necesitar comprobar que se renderizan los hijos, ya que el `Outlet` se encargará de ello:

```tsx
vi.mock('../header/header');
vi.mock('../footer/footer');

describe('Layout component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Layout title="Demo 06"></Layout>
      </MemoryRouter>,
    );
  });

  test('should call components Header and Footer', () => {
    expect(Header).toHaveBeenCalled();
    expect(Footer).toHaveBeenCalled();
  });
});
```

Las rutas en el componente AppRoutes quedarían de la siguiente forma:

```tsx
type Props = {
  title?: string;
};
export const AppRoutes: React.FC<Props> = ({ title }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout title={title} />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
};
```

Y el componente `App` solo cargaría las rutas, con lo que quedaría así:

```tsx
import { AppRoutes } from './routes/app-routes';
export const App: React.FC = () => {
  const title = import.meta.env.VITE_APP_TITLE || 'Demo 06 - Routes';

  return (
    <>
      <AppRoutes title={title} />
    </>
  );
};
```

Igualmente se simplificaría su test que solo necesita comprobar que llama al componente `AppRoutes`:

```tsx
vi.mock('../../routes/app-routes');

describe('App component', () => {
  test('should call components Header and Footer', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(AppRoutes).toHaveBeenCalled();
  });
});
```

### Menu y navegación

#### Componente Menu

Como parte del componente Layout añadimos un componente Menu, con los enlaces a las rutas.

Pera la rutas utilizamos un array con la información de cada una de ellas y lo renderizamos de forma iterativa.

```tsx
type MenuOption = {
  label: string;
  path: string;
};

export const Menu: React.FC = () => {
  const menuOptions: MenuOption[] = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
  ];

  return (
    <nav className="menu">
      <ul>
        {menuOptions.map((option) => (
          <li key={option.path}>
            <a href={option.path}>{option.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
```

El test del menu, sin ser todavia funcional, se limita a comprobar que se renderiza el componente y que contiene los enlaces definidos:

```tsx
describe('Menu component', () => {
  test('should render project info', () => {
    render(<Menu />);
    let option = screen.getByText(/home/i);
    expect(option).toBeInTheDocument();
    option = screen.getByText(/about/i);
    expect(option).toBeInTheDocument();
    option = screen.getByText(/products/i);
    expect(option).toBeInTheDocument();
  });
});
```

En el componente Header añadimos la posibilidad de recibir un children, que será el componente `Menu`:

```tsx
type Props = {
  title?: string;
  children?: React.ReactNode;
};
export const Header: React.FC<Props> = ({ title = 'Demo', children }) => {
  return (
    <header className="header">
      <div className="header-main">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>{title}</h1>
      </div>
      {children && <div className="header-children">{children}</div>}
    </header>
  );
};
```

En el componente Layout, se añade el componente `Menu` como hijo del `Header`:

```tsx
type Props = {
  title?: string;
};
export const Layout: React.FC<Props> = ({ title = '' }) => {
  return (
    <>
      <Header title={title}>
        <Menu />
      </Header>
      <main className="main">
        {/* This is where the child components will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
```

De esta forma mantenemos la semántica del HTML, que indica los elementos de navegación dentro del `header`, y el componente `Menu` se renderiza como parte del `Header`.
