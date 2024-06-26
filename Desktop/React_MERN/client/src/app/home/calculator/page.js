"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const Page = () => {
  const [number, setNumber] = useState("");

  const handleClick = (val) => {
    if (val === "=") {
      try {
        setNumber(eval(number).toString());
      } catch {
        setNumber("Error");
      }
    } else if (val === "C") {
      setNumber("");
    } else {
      setNumber(number + val);
    }
  };

  let calcInput = [
    ["C", "%", "⌫", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="],
  ];

  const whiteColorGang = ["C", "%", "⌫"];
  const orangeColorGang = ["/", "*", "-", "+", "="];

  const generateClassName = (val) => {
    if (orangeColorGang.includes(val)) {
      return "p-2 bg-orange-400 m-2 w-18 rounded-xl";
    } else if (whiteColorGang.includes(val)) {
      return "p-2 bg-white m-2 w-18 rounded-xl";
    } else {
      return "p-2 bg-gray-100 m-2 w-18 rounded-xl";
    }
  };

  return (
    <div>
      <div className="border border-black w-[32%] bg-black rounded-sm p-2">
        <div className="text-white">{number}</div>
      </div>
      <div className="border border-black w-[32%] bg-black rounded-sm">
        {calcInput.map((row, rowIndex) => (
          <div key={rowIndex} className="flex m-1 p-1">
            {row.map((val, colIndex) => (
              <Button
                key={colIndex}
                className={generateClassName(val)}
                onClick={() => handleClick(val)}
              >
                {val}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
