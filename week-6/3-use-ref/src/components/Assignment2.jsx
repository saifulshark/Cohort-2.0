
// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.
import React, { useState, useRef } from 'react';

export function Assignment2() {
    const renderCount = useRef(0);
    const [prev, forceRender] = useState(0);

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(prev => prev + 1);
    };

    // Increment render count on each render
    renderCount.current++;

    return (
        <div>
            <p>This component has rendered {renderCount.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}
