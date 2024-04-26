import { useState } from "react";

import "./App.css";
import Mainlayout from "./layout/mainlayout";
import Hero from "./components/Hero";
import Sidenav from "./components/sidenav";
import Testing from "./components/Testing";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NextUIProvider>
        <div className="flex">
          <Sidenav />
          <div className="w-full flex flex-col">
            {" "}
            <Mainlayout />
            <Hero />
          </div>
        </div>
        <Testing />
      </NextUIProvider>
    </>
  );
}

export default App;
