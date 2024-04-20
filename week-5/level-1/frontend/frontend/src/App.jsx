import React, { useState, useEffect } from "react";

function CreateBusinesscard({ name, description, age, linkedinURL, xURL }) {
  return (
    <div style={styles.container}>
      <h1>{name}</h1>
      <br />
      <p>{description}</p>
      <br />
      <h3>Age: {age} Years</h3>
      <div style={styles.buttonContainer}>
        <a href={linkedinURL} target="_blank">
          <button style={styles.button}>LinkedIn</button>
        </a>
        <a href={xURL} target="_blank">
          <button style={styles.button}>Twitter</button>
        </a>
      </div>
    </div>
  );
}

function App() {
  const [businessCards, setBusinessCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/businesscards")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBusinessCards(data.response);
        } else {
          console.error("Failed to fetch business cards data.");
        }
      })
      .catch((error) => {
        console.error("Error fetching business cards data:", error);
      });
  }, []);

  return (
    <div>
      {businessCards.map((card) => (
        <CreateBusinesscard
          key={card._id}
          name={card.name}
          description={card.description}
          age={card.age}
          linkedinURL={card.linkedinURL}
          xURL={card.xURL}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
    margin: "0 auto",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "5px",
  },
};

export default App;
