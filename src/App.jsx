import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  function increase(prev){
    setCount(count+1)
  }

  function decrease(){
    setCount(count-1)
  }

  function reset(){
    setCount(0)
  }

  return (
    <div className="app-container">
      <h1>React Counter App</h1>
      <p>Count: {count}</p>
      <div className="button-group">
        <button onClick={increase} className="increment">
          Increment
        </button>
        <button onClick={decrease} className="decrement">
          Decrement
        </button>
        <button onClick={reset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
