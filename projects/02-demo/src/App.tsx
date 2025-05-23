import type { JSX } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { ItemsWrapper } from "./components/11.items";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <ItemsWrapper />

      <p className="read-the-docs">Información del proyecto</p>
    </>
  );
}

export default App;
