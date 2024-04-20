const express = require("express");
const cors = require("cors");
const { createBusinessCard, updateBusinessCard } = require("./types");
const { businesscard } = require("./db");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

//POST name, description, age, LinkedIn URL, X URL
app.post("/businesscards", async (req, res) => {
  const createPayload = req.body;
  const validatePayload = createBusinessCard.safeParse(createPayload);
  if (!validatePayload.success) {
    res.status(401).json({ msg: "Inputs are wrong bud :/" });
  } else {
    const newBusinesscard = await businesscard.create({
      name: createPayload.name,
      description: createPayload.description,
      age: createPayload.age,
      linkedinURL: createPayload.linkedinURL,
      xURL: createPayload.xURL,
    });
    res.status(201).json({
      success: true,
      businesscardId: newBusinesscard._id,
      msg: "Item created successfully",
    });
  }
});

//GET all the business cards of all users
app.get("/businesscards", async (req, res) => {
  const response = await businesscard.find({});
  res.status(201).json({ response, success: true });
});

//DELETE all the busniess cards of all users
app.delete("/businesscards/delete", async (req, res) => {
  const response = await businesscard.deleteMany({});
  // console.log(response);
  res.status(201).json({ success: true, msg: "All items deleted successfuly" });
});

//GET business cards of specific user
app.get("/businesscards/:id", async (req, res) => {
  const id = req.params.id;
  const validateId = updateBusinessCard.safeParse({ id });
  // console.log(id);
  // console.log(validateId);
  if (!validateId) {
    res.status(401).json({ success: false, msg: "Item does not exist bud :/" });
  } else {
    const response = await businesscard.findOne({ _id: id });
    if (response) {
      res.status(201).json({ response, success: true });
    } else {
      res.json({ msg: "Not found :/" });
    }
  }
});

//DELETE business card of specific user
app.delete("/businesscards/delete/:id", async (req, res) => {
  const id = req.params.id;
  const validateId = updateBusinessCard.safeParse(id);
  if (!validateId) {
    res.status(401).json({ success: false, msg: "Item does not exist bud :/" });
  } else {
    const response = await businesscard.deleteOne({ _id: id });
    res.status(201).json({ response, success: true });
  }
});

//global catch
app.use((err, req, res, next) => {
  res.status(404).json({
    err: "Something went wrong :/",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
