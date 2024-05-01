import React, { useEffect, useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

// this code is just to make the random sentences 

const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}

export function Assignment2() {
    const [sentences, setSentences] = useState(ALL_WORDS);
    const [filter, setFilter] = useState("");


    const filteredSentences = useMemo(()=>{
          return sentences.filter(x => x.includes(filter));
    }, [sentences, filter]) ;// to handle this we can use the useMemo

    return <div>
        <input type="text" onChange={(e) => {
            setFilter(e.target.value)
        }}></input>
        {filteredSentences.map(word => <div>
            {word}    
        </div>)}
    </div>
}


//note of learning why we used the two states
// sentences : These have the information about the all sentences that are stored.
// filter : This state is basically a variable that we are going to use to filter out
//          the to search there for we have .

// working flow : We basically use that filter value to use the filter criteria to find out the desired output.

// useMemo how it is helping lets see : 
