import BusinessCard from "./components/BusinessCard";

function App() {
  let identity = {
    name: "Mr. Vivek(consciouness)",
    description: "A TA in our mind",
    interests: [
      "sensory perception",
      "mental imagery",
      "inner speech",
      "conceptual thought",
      "remembering",
      "emotional feeling",
      "self-awareness",
    ],
    links: [{
      linkedin: "https://linkedin.com",
    },
    {
      twitter: "https://twitter.com",
    },
    ]
  }

  return (
    <>
      <BusinessCard props={identity} />
    </>
  )
}

export default App
