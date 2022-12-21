import React, { useState } from "react";
import "./Calculator.css";
import icons from "./image/icons.png";

export default function Calculator() {
  const [num, setNum] = useState(0); // 0
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);

  function inputNum(event) {
    const input = event.target.value; // 5
    if (num === 0) {
      setNum(input); // 5
    } else { //
      setNum(num + input); // 0 + valorInput
    }
  }

  function clear() {
    setNum(0); // 0
  }

  function percentage() {
    setNum(num / 100); // aqui ele está dando a % somente do valor atual
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(event) {
    const operatorInput = event.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    }
  }
  
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes()
  
  return (
    <div className="container-calculator">
      <div className="container-header">
      <div className="hora">{`${hour}:${minute}`}</div>
      <div className="icons">
        <img src={icons} alt="icons" />
      </div>
      </div>
        <div className="wrapper">
          <p className="result">{num}</p>
          <div className="buttons">
            <button className="gray" onClick={clear}>
              AC
            </button>
            <button className="gray" onClick={changeSign}>
              +/-
            </button>
            <button className="gray" onClick={percentage}>
              %
            </button>
            <button className="orange" onClick={operatorHandler} value={"/"}>
              /
            </button>
            <button className="gray" onClick={inputNum} value={7}>
              7
            </button>
            <button className="gray" onClick={inputNum} value={8}>
              8
            </button>
            <button className="gray" onClick={inputNum} value={9}>
              9
            </button>
            <button className="orange" onClick={operatorHandler} value={"X"}>
              X
            </button>
            <button className="gray" onClick={inputNum} value={4}>
              4
            </button>
            <button className="gray" onClick={inputNum} value={5}>
              5
            </button>
            <button className="gray" onClick={inputNum} value={6}>
              6
            </button>
            <button className="orange" onClick={operatorHandler} value={"-"}>
              -
            </button>
            <button className="gray" onClick={inputNum} value={1}>
              1
            </button>
            <button className="gray" onClick={inputNum} value={2}>
              2
            </button>
            <button className="gray" onClick={inputNum} value={3}>
              3
            </button>
            <button className="orange" onClick={operatorHandler} value={"+"}>
              +
            </button>
            <button className="gray zero" onClick={inputNum} value={0}>
              0
            </button>
            <button className="gray" onClick={inputNum} value={"."}>
              .
            </button>
            <button className="orange" onClick={calculate}>
              =
            </button>
          </div>
          <p className="barra-inferior">_____</p>
        </div>
      </div>
  );
}
