import React, { useState, useMemo } from "react";

// Generate a large list of sentences
const generateSentences = () => {
    const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
    const TOTAL_LINES = 1000;
    const ALL_WORDS = [];
    for (let i = 0; i < TOTAL_LINES; i++) {
        let sentence = "";
        for (let j = 0; j < 8; j++) {
            sentence += words[Math.floor(words.length * Math.random())] + " ";
        }
        ALL_WORDS.push(sentence.trim());
    }
    return ALL_WORDS;
};

export function Assignment2() {
    const [filter, setFilter] = useState("");

    // Generate sentences only once
    const sentences = useMemo(() =>{
        console.log('inside sentences useMemo')
        return generateSentences()
    }, []);

    // Memoize the filtered sentences
    const filteredSentences = useMemo(() => {
        console.log('inside filteredSentences useMemo')
        return sentences.filter(sentence => sentence.includes(filter));
    }, [filter, sentences]);

    return (
        <div>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter sentences"
            />
            <div>
                {filteredSentences.map((sentence, index) => (
                    <div key={index}>{sentence}</div>
                ))}
            </div>
        </div>
    );
}

export default Assignment2;
