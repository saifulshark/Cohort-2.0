import { VALUE } from "@repo/common/config";
import express from "express";

const app = express();

console.log("Hi:", VALUE);
app.get("/", (req, res) => {
  return res.json({
    message: "Hello World!",
  });
});

app.listen(3000, () => {
  console.log("App Running on 3000");
});
