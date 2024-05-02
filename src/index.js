import { render } from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

console.log("Hello world!!!");
const user = {
  name: "Dmytro",
  lastName: "Borodin",
  id: 1,
  age: 28,
};

console.log(user);
