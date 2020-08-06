import React from "react";
import App from "App.js";

import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";

describe("App.js", () => {
  test("does render without crash", () => {
    const { getByText } = render(<App />);

    expect(getByText("My Files")).toBeInTheDocument();
    expect(getByText("Information")).toBeInTheDocument();
    expect(getByText("Cloud Storage")).toBeInTheDocument();
    expect(getByText("Quick Access")).toBeInTheDocument();
    expect(getByText("Recent Files")).toBeInTheDocument();
  });
});
