# React Router

- [React Router](#react-router)
  - [Data (Programática)](#data-programática)
    - [Provider y Rutas](#provider-y-rutas)
      - [Componente App. Test de App](#componente-app-test-de-app)
      - [Test de las rutas](#test-de-las-rutas)
    - [Carga diferida (Lazy loading) de las páginas](#carga-diferida-lazy-loading-de-las-páginas)
      - [Test de las rutas con carga diferida](#test-de-las-rutas-con-carga-diferida)
    - [Menu y navegación](#menu-y-navegación)
      - [Componente Menu](#componente-menu)
      - [SPA](#spa)
      - [Test funcional del menú](#test-funcional-del-menú)
    - [Rutas dinámicas](#rutas-dinámicas)
      - [Products: carga de datos en la ruta](#products-carga-de-datos-en-la-ruta)
      - [Test del componente Products](#test-del-componente-products)
      - [Rutas a los detalles de un producto](#rutas-a-los-detalles-de-un-producto)
      - [Componente ProductDetail](#componente-productdetail)
      - [Test del componente ProductDetail](#test-del-componente-productdetail)

En sus versiones 7.x existen tres estrategias de uso:

- Declarativa
- Data (Programática)
- Framework

## Data (Programática)

Las rutas no se definen de forma declarativa :

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<div>404 Not Found</div>} />
</Routes>
```

En su lugar se crea un array de objetos que representan las rutas

```tsx
import { type RouteObject } from 'react-router-dom';
export const routes: RouteObject[] = [
  {
    path: '/',
    Component: App,
    children: [
      {
        // path: '/',
        index: true,
        Component: Home,
      },
      {
        path: '/products',
        Component: Products,
      },
      {
        path: 'product/:id',
        Component: ProductDetail,
      },
      {
        path: 'about',
        Component: About,
      },
    ],
  },
];
```

Las rutas se pueden definir de forma anidada, utilizando la propiedad `children`.
El componente por defecto puede indicarse con un `path: '\'` o con la propiedad `index: true`, que indica que es la ruta por defecto del padre.

### Provider y Rutas

En el fichero main

- Con el array importado de las rutas como parámetro se crea un router
- se añade un provider de las rutas

```tsx
import { createRoot } from 'react-dom/client';
import { createBrowserRouter BrowserRouter} from 'react-router-dom';
import { appRoutes } from './core/routes/routes.ts';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

const router = createBrowserRouter(routes);
root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
```

El nuevo formato del RouterProvider ya no encapsula ningún componente, sino que recibe un objeto `router` que contiene las rutas definidas.

#### Componente App. Test de App

Para simplificar App actúa como layout, en lugar de tener un componente Layout como contenido.

Para testar App basta con comprobar que llama a los componente Header y Footer. No es necesaria ninguna indicación de la existencia del `Outlet`, o de cualquier otro elemento del enrutamiento

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
    render(<App />);
    expect(Header).toHaveBeenCalled();
    expect(Footer).toHaveBeenCalled();
  });
});
```

Lo que testamos es que es capaz de llamar a los componentes `Header` y `Footer`, que son parte del layout de la aplicación.

#### Test de las rutas

Para testar las rutas, se puede hacer de forma similar al test de `AppRoutes.tsx`, empleando en lugar de un `MemoryRouter` un `createMemoryRouter`, que recibirá como parametros el array de rutas y un objeto con la ruta activa de cada caso de test:

```tsx
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';
import { Products } from '../../features/products/products';

vi.mock('../../features/home/home');
vi.mock('../../features/about/about');

describe('App component', () => {
  test('should render info for invalid routes', () => {
    const router = createMemoryRouter(appRoutes, {
      initialEntries: ['/invalid-route'],
    });
    render(<RouterProvider router={router} />);

    const element = screen.getByText('404 Not Found');
    expect(element).toBeInTheDocument();
  });

  test('should route to home page', async () => {
    const router = createMemoryRouter(appRoutes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
    expect(Home).toHaveBeenCalled();
  });
  test('should route to about page', async () => {
    const router = createMemoryRouter(appRoutes, {
      initialEntries: ['/about'],
    });
    render(<RouterProvider router={router} />);
    expect(About).toHaveBeenCalled();
  });
});
```

### Carga diferida (Lazy loading) de las páginas

Se basa en la existencia en el estándar de JS de la posibilidad de importar **módulos** de forma **asíncrona**, utilizando la función `import()`.

Para implementar el lazy loading en las rutas de React Router, se puede utilizar la función `lazy` de React, que permite cargar componentes de forma diferida. Para facilitar esta operación es conveniente que los componentes que se vayan a cargar de forma diferida estén exportados de forma `default`.

```tsx
const Home = React.lazy(() => import('../../features/home/home'));
const Products = React.lazy(() => import('../../features/products/products'));
const ProductDetail = React.lazy(
  () => import('../../features/products/pages/product-detail'),
);
const About = React.lazy(() => import('../../features/about/about'));
```

De esta forma no es necesaria ninguna modificación en el array de rutas.

Una alternativa es usar la propiedad lazy de los objetos de las rutas, que permite definir el componente a cargar de forma diferida:

```tsx
{
  path: 'about',
  lazy: {
      Component: async () =>
          (await import('../../features/about/about')).About,
  },
},
```

#### Test de las rutas con carga diferida

El único cambio en loa test de las rutas es que se debe usar waitFor para esperar a que se resuelva la carga del componente diferido:

```tsx
test('should route to home page', async () => {
  const router = createMemoryRouter(appRoutes, { initialEntries: ['/'] });
  render(<RouterProvider router={router} />);
  await waitFor(() => {
    expect(Home).toHaveBeenCalled();
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

El test del menu, sin ser todavía funcional, se limita a comprobar que se renderiza el componente y que contiene los enlaces definidos:

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

#### SPA

Al utilizar href en los enlaces del menú, la navegación es una MPA, ya que recarga la página al hacer clic en un enlace.

Para que sea una SPA, se debe utilizar el componente `Link` de React Router para navegar entre las diferentes rutas sin recargar la página.

```tsx
import { Link } from 'react-router-dom';
...
<Link to={option.path} className="menu-link">
  {option.label}
</Link>;
```

Ahora, al hacer clic en un enlace del menú, la navegación se realiza sin recargar la página, manteniendo el estado de la aplicación y mejorando la experiencia del usuario.

#### Test funcional del menú

Para testear de forma unitaria el menu SPA necesitamos comprobar que el Link responde cuando hacemos click, sin necesidad de que se cargue realmente ninguna ruta.

Para ello, podemos utilizar el objeto history del navegador, pero el problema es que MemoryRouter no modifica la URL del navegador real (window.location), ya que funciona completamente en memoria y React Router no expone el estado de location fuera de su contexto.

La librería **history** (usada internamente tanto por React Router como por Remix) puede ayudarnos si usas un router controlado como unstable_HistoryRouter y si creamos un objeto history.

La podemos instalar con:

```bash
npm i -D history
```

A continuación usamos **createMemoryHistory** y **unstable_HistoryRouter** (de React Router)

```tsx
import { render, screen } from '@testing-library/react';
import { Menu } from './menu';
import {
    unstable_HistoryRouter as Router,
    type HistoryRouterProps,
} from 'react-router';
import { createMemoryHistory } from 'history';

describe('Menu component', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        history.push('/test');
        history.push = vi.fn();
        render(
            <Router
                history={history as unknown as HistoryRouterProps['history']}
            >
                <Menu />
            </Router>,
        );
    });
    afterEach(() => {
        vi.clearAllMocks();
    });
    ...
})
```

Ahora podemos comprobar que al hacer clic en un enlace del menú, se llama a la función `push` del objeto `history`, que es la que se encarga de cambiar la ruta actual sin recargar la página.

```tsx
test('should respond when we click the link to home', async () => {
  const option = screen.getByText(/home/i) as HTMLAnchorElement;
  expect(option.href).toContain('/');
  option.click();
  // Check if history.push was called with the correct path
  expect(history.push).toHaveBeenCalledWith(
    expect.objectContaining({
      hash: '',
      pathname: '/',
      search: '',
    }),
    undefined,
    expect.anything(),
  );
});
``;
```

Y lo mismo para cada una de las rutas,

### Rutas dinámicas

#### Products: carga de datos en la ruta

Para utilizar rutas dinámicas creamos la feature Products

- La entidad correspondiente
- un Mock de productos almacenado como una constante
- Un servicio con métodos asíncronos para obtener los productos y uno por id
- Un componente Products que renderiza una lista de productos
- Un componente Product que renderiza un producto por id

La carga de los productos se realiza en el componente `Products`, que utiliza el servicio para obtener los datos de los productos y renderizarlos en una lista.

Sin embargo, desde la ruta se puede adelantar la carga de los datos, utilizando el método `loader` de React Router, que permite cargar datos antes de renderizar el componente.

```tsx
const loadProductData = async (): Promise<Product[]> => {
    const {default: repo} = await import('../../features/products/services/products.service');
    return await repo.getAllProducts();
};
...
  {
    path: '/products',
    Component: Products,
    loader: loadProductData,
  },
```

En el componente se puede acceder a los datos de forma sincrona utilizando el hook `useLoaderData` de React Router, que devuelve los datos cargados por el loader:

```tsx
import { useLoaderData } from 'react-router';

const Products: React.FC = () => {
  const loadedProducts = useLoaderData<Product[]>();
  const [products, setProducts] = useState<Product[]>(loadedProducts || []);
};
```

#### Test del componente Products

Cuando los componentes usan elementos como `useLoaderData`, \<Link>, etc., deben renderizarse en el contexto de un provider de React Router. La función `createRoutesStub` crea ese contexto para probar los componentes de forma aislada.

```tsx
const Stub = createRoutesStub([
  {
    path: '/products',
    Component: Products,
    loader(): Product[] {
      return [];
    },
  },
]);

await act(async () => {
  render(<Stub initialEntries={['/products']} />);
});
```

#### Rutas a los detalles de un producto

En al componente `Products` cada item tiene un link con una ruta dinámica:

- parte fija: `/products/`
- segmento dinámica: el id de cada producto, que será identificado como `:id`

```tsx
<ul className="products-list">
  {items.map((item) => (
    <li className="product-item" key={item.id}>
      <Link to={'/product/' + item.id}>{item.name}</Link>
    </li>
  ))}
</ul>;
``;
```

En las rutas se incluye una nueva, con el patron dinámico `/product/:id`:

```tsx
<Routes>
  <Route path="/" element={<Layout title={title} />}>
    ...
    <Route path="product/:id" element={<ProductDetail />} />
    ...
  </Route>
</Routes>
```

#### Componente ProductDetail

El componente `ProductDetail` recupera el id de la ruta y el resto de sus datos del servicio, para poder mostrar el producto correspondiente:

```tsx
const { id } = useParams<{ id: UUID }>();
const [product, setProduct] = useState<Product | null>(null);
useEffect(() => {
  const loadData = async (id: UUID): Promise<void> => {
    console.log('Loading product data for ID:', id);
    // Simulate fetching product data
    const fetchedProduct: Product = await repo.getProductById(id);
    setProduct(() => fetchedProduct);
  };
  loadData(id as UUID);
}, [id]);
```

Ademas se añade un botón de volver al inicio como ejemplo de navegación programática, que utiliza el hook `useNavigate` de React Router:

```tsx
const navigate = useNavigate();
const handleClick = (): void => {
  console.log('Button clicked, navigating to home');
  navigate('/');
};
```

#### Test del componente ProductDetail

Además ed usar una ruta dinámicac, el componente `ProductDetail` utiliza un servicio para obtener los datos del producto, por lo que es necesario usar un mock para poder testarlo y hay que tener en cuenta el carácter asíncrono de los datos que se van a mostrar.

```tsx
const product: Product = {
  id: '46392892-ac1e-4b5b-b395-978c318ef7ef',
  name: 'Product_1',
  description: 'Description of Product 1',
  price: 100,
  category: 'Category 1',
  image: 'https://example.com/product1.jpg',
};
const url = '/product/' + product.id;
beforeEach(async () => {
  vi.spyOn(repo, 'getProductById').mockResolvedValue(product);
  await act(async () =>
    render(
      <MemoryRouter initialEntries={[url]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </MemoryRouter>,
    ),
  );
});
```

En el test se comprueba que se renderiza el producto con los datos correctos. No es necesario que sea asíncrono, porque el act que envuelve al render ya ha esperado que se resuelva la carga de datos del producto:

```tsx
test('should render product details', () => {
  const name = screen.getByText(new RegExp(product.name, 'i'));
  expect(name).toBeInTheDocument();
  if (product.description) {
    const description = screen.getByText(new RegExp(product.description, 'i'));
    expect(description).toBeInTheDocument();
  }
  const price = screen.getByText(new RegExp(`${product.price}€`, 'i'));
  expect(price).toBeInTheDocument();
  if (product.category) {
    const category = screen.getByText(new RegExp(product.category, 'i'));
    expect(category).toBeInTheDocument();
  }
});
```

Por último se testa que el botón de volver al inicio navega a la ruta `/`:

```tsx
    test('should navigate to home when button is clicked', () => {
        const button = screen.getByRole('button', { name: /volver/i });
        expect(button).toBeInTheDocument();
        button.click();
        expect(history.location.pathname).toBe('/');
    });
});
```

En este caso es sencillo porque, a diferencia del Link, la función `navigate` del hook `useNavigate` si modifica el objeto `history` del navegador, por lo que podemos comprobar que la ruta ha cambiado correctamente.
