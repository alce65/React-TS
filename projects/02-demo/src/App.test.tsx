import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("", () => {
    render(<App />);
    const title = screen.getByText(/Vite & React/i);
    expect(title).toBeInTheDocument();
  });
});
