import { useState } from "react";
import "./App.css";
import { WheelSpinner } from "./components/wheel";

function App() {
  const [count, setCount] = useState(0);

  const people = [
    { id: 0, name: "Ben" },
    { id: 1, name: "Chris" },
  ];

  return <WheelSpinner people={people} />;
}

export default App;
