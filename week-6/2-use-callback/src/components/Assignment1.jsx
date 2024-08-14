import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [counts, setCount] = useState(0);

    // Your code starts here

    const handleIncrement = useCallback(function () {
        setCount(counts+1)
    }, [counts])
    const handleDecrement = useCallback(function () {
        setCount(counts - 1)
    }, [counts])
    // Your code ends here

    return (
        <div>
            <p>Count: {counts}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
       { console.log("inside Counter Buttons")}
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
))
