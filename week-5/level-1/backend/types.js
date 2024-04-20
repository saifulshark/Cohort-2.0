const zod = require("zod");

const createBusinessCard = zod.object({
  name: zod.string(),
  description: zod.string(),
  age: zod.string(),
  linkedinURL: zod.string(),
  xURL: zod.string(),
});

const updateBusinessCard = zod.object({
  id: zod.string(),
});

module.exports = {
  createBusinessCard: createBusinessCard,
  updateBusinessCard: updateBusinessCard,
};
