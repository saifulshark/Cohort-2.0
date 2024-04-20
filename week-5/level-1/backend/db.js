const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGOOSE_URI = process.env.MONGO_URI;
mongoose.connect(MONGOOSE_URI);

const businesscardSchema = mongoose.Schema({
  name: String,
  description: String,
  age: String,
  linkedinURL: String,
  xURL: String,
});

const businesscard = mongoose.model("Business-Card Item", businesscardSchema);

module.exports = {
  businesscard,
};
