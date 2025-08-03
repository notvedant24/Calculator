import { useState } from "react";
import './App.css'
export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const calculate = () => {
    if (!expression) {
      setResult("Error");
      return;
    }
    try {
      const ans = eval(expression);
      setResult(ans);
    } catch {
      setResult("Error");
    }
  };

  const clearAll = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
     <input type="text" value={expression} readOnly />
      <div className="result">{result}</div>

      <div className="grid">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={clearAll}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}
