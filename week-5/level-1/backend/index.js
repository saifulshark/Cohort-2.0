const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

//POST name, description, age, LinkedIn URL, X URL
app.post("/businesscard", async (req, res) => {});

//GET all the business cards of all users
app.get("/businesscards", async (req, res) => {});

//DELETE all the busniess cards of all users
app.delete("businesscards/delete", async (req, res) => {});

//GET business cards of specific user
app.get("businesscards/:id", async (req, res) => {});

//DELETE business card of specific user
app.delete("businesscards/delete/:id", async (req, res) => {});

//global catch
app.use((err, req, res, next) => {
  res.status(404).json({
    err: "Something went wrong :/",
  });
});

app.listen(`Listening to port: ${PORT}`, PORT);
