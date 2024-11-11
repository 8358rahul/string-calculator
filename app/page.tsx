"use client";
import { add } from "@/utils/stringCalculator";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      setResult(error instanceof Error ? error.message : "Unknown error");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 min-h-screen">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-center text-purple-800 mb-6">
          String Calculator
        </h1>

        <ul>
          <li>
            <p className="text-start text-gray-600 mb-6">
              1. Add numbers separated by commas. ex: 2,3,4
            </p>
          </li>
          <li>
            <p className="text-start text-gray-600 mb-6">
              2. Allows newline as a delimiter. ex: 5\n10,15
            </p>
          </li>
          <li>
            <p className="text-start text-gray-600 mb-6">
              3. Supports custom delimiters. ex: //;\n1;2;3
            </p>
          </li>
          <li>
            <p className="text-start text-gray-600 mb-6">
              4. Negative numbers not allows
            </p>
          </li>
        </ul>

        <input
          className="w-full p-4 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 mb-6 text-lg text-gray-800 placeholder-gray-400"
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300"
        >
          Calculate
        </button>

        <div className="mt-6 text-xl text-gray-700">
          <strong className="text-purple-700">Result:</strong>{" "}
          <span className="font-semibold text-purple-800">{result}</span>
        </div>
      </div>
    </div>
  );
}
