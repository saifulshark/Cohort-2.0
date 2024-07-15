import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(null);
  // Your solution starts here
  const expensiveValue = useMemo(() => {
    const factorial = (num) => {
      if (num === 0 || num === 1) {
        return 1;
      }
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    };
    return factorial(input);
  }, [input]);
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
