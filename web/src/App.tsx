import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.tsx";

function App() {
  function handleSearch(e) {
    console.log(e);
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar query={query} />
      <h1 className="text-3xl font-bold flex-grow">Hello world!</h1>
    </div>
  );
}

export default App;
