import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("", () => {
    render(<App />);
    const info = screen.getByText(/proyecto/i);
    expect(info).toBeInTheDocument();
  });
});
