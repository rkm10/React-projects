import Keypad from "./keypad";
import React, { useState } from "react";
export default function Calculator() {

      let [input, setInput] = useState("")
      function handleClick(value) {
            setInput(input + value)
      }
      function calculate() {
            let outputval = eval(input)
            setInput(outputval)

      }
      function handleClear() {
            setInput("")
      }

      return (
            <div className="container">
                  <h1>Calculator Using React</h1>
                  <div className="calculator">
                        <input type="text" value={input} className="output" readOnly />
                        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>
                  </div>
            </div>
      )

}