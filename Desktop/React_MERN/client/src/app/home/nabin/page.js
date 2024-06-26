"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

function page() {
  useState;
  const calcInput = [
    ["C", "%", "⌫", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="],
  ];

  const whiteColorGang = ["C", "%", "⌫"];
  const orangeColorGang = ["/", "*", "-", "+", "="];
  let [number, setNumber] = useState("");
  let [numberBackUp, setNumberBackUp] = useState("");
  const generateClassName = (val) => {
    debugger;
    if (orangeColorGang.includes(val)) {
      return "p-2 bg-orange-400 m-2 w-18 rounded-xl";
    } else if (whiteColorGang.includes(val)) {
      return "p-2  bg-white m-2 w-18 rounded-xl";
    } else {
      return "p-2 bg-gray-400  m-2 w-18 rounded-xl";
    }
  };

  const calculate = (val) => {
    switch (val) {
      case "C":
        setNumber("");
        break;
      case "⌫":
        setNumber(number.slice(0, -1));
        break;
      case "%":
        setNumber(eval(number) / 100);
        break;
      case "%":
        setNumber(eval(number) / 100);
        break;

      default:
        setNumber(number + val);
        break;
    }
  };

  const clear = (action) => {
    setNumberBackUp(number);
    setNumber("");
  };
  return (
    <div className="flex justify-center items-center min-h-screen min-w-full ">
      <div className=" border border-black w-[30%]  bg-black rounded-lg">
        <h2 className="text-white text-center text-3xl">CALCULATOR</h2>
        <div className="text-white border border-white m-2 p-2">{number}</div>
        {calcInput.map((item) => {
          return (
            <div className="flex m-2 p-2">
              {item.map((val) => {
                return (
                  <Button
                    onClick={() => calculate(val)}
                    className={generateClassName(val)}
                  >
                    {val}
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
