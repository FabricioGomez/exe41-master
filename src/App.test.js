import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";

test("render the app", () => {
  render(
    <Provider store={store}>
      <p>this is a test</p>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/this is a test/i);
  console.log(linkElement.innerHTML);
  expect(linkElement.innerHTML).toBe("this is a test")
});
