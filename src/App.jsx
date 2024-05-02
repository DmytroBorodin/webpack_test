import React from "react";
import Users from "./components/Users";
import "./styles/index.scss";
import sword from "./images/swc-sword.png";
import swordSVG from "./images/sword.svg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section className="greeting">
          <h1>Hello from React SPA</h1>
          <img src={sword} width={250} alt="sword" />
          <img src={swordSVG} width={250} alt="swordSVG" />
        </section>
        <section>
          <Users />
        </section>
      </main>
    </>
  );
};

export default App;
