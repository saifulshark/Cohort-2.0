import {memo, useCallback, useState} from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here

    //why this below commented solution will not work because
    // const handleIncrement = useCallback(()=>{
    //     console.log("increment")
    //     setCount(count +1 )
    //     // in order to use state variable inside the UseCallback, you need to make
    //     // count state as a dependency, but if we make count as a dependency, then
    //     // CounterButtons component will re-render on count which doesn't solve our
    //     // problem.
    // },[])

    const handleIncrement = useCallback(()=>{
        console.log("increment")
        // you can access the value of count state value in setCount by passing the callback with an argument,
        // for which we don't have to pass count state as a dependency in useCallback hook.
        setCount((currentValue)=> currentValue + 1)
    },[])

    const handleDecrement = useCallback(()=>{
        console.log("decrement")
        setCount((currentValue)=> currentValue - 1)
    }, [])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    )
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => {
    console.log("render")
    return <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
})



