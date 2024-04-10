import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [forceRender, setForceRender] = useState(0);
    const renderRef = useRef(0)

    renderRef.current = renderRef.current + 1

    const handleReRender = () => {
        // Update state to force re-render
        setForceRender(c => c + 1);
    };

    return (
        <div>
            <p>This component has rendered {forceRender} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};