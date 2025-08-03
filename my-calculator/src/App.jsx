import { useState } from "react";
import './App.css'
export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const calculate = () => {
    try {
      if (expression === "") {
        setResult("Error");
        return;
      }
      setResult(eval(expression));
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
    <input value={expression} readOnly />

    {/* result comes directly under input box */}
    <div className="result">{result}</div>

    <div className="grid">
      {["7","8","9","+"].map((btn)=><button key={btn} onClick={()=>handleClick(btn)}>{btn}</button>)}
      {["4","5","6","-"].map((btn)=><button key={btn} onClick={()=>handleClick(btn)}>{btn}</button>)}
      {["1","2","3","*"].map((btn)=><button key={btn} onClick={()=>handleClick(btn)}>{btn}</button>)}
      <button onClick={clearAll}>C</button>
      <button onClick={()=>handleClick("0")}>0</button>
      <button onClick={calculate}>=</button>
      <button onClick={()=>handleClick("/")}>/</button>
    </div>
  </div>
);

}
