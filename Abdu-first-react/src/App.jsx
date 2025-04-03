import { useState } from "react";
import { Cta, Brand, Navbar } from "./components";
import {
  Blog,
  WhatGpt3,
  Footer,
  Header,
  Possibility,
  whatGpt3,
} from "./containers";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <Brand></Brand>
        <WhatGpt3></WhatGpt3>
        <Cta></Cta>
      </div>
    </>
  );
}

export default App;
