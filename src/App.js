import React from "react";
import Counter from "./counter";
import Counterhooks from "./Counterhooks";

function App() {
  return (
    <>
      Counter
      <Counter initialCount={0} />
      Counter Hooks
      <Counterhooks initialCount={0} />
    </>
  )
}

export default App;
