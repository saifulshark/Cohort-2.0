import { useCallback } from "react";
import { useState, memo } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback(() => {
        setCount((prevcount) => prevcount + 1);
    }, [])

    const handleDecrement = useCallback(() => {
        setCount(prevcount => prevcount - 1);
    }, [])
    // Your code ends here
    console.log('parent rendered');
    return (
        <div>
            <p>Count: {count}</p>
            <MemoizedCounterButtons  onIncrement={handleIncrement} onDecrement={handleDecrement} />
            <p>this is simple text</p>
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => {
    console.log('Child re-rendered');
    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    );
};


const MemoizedCounterButtons = memo(CounterButtons);