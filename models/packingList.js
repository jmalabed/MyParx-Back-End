const mongoose = require("mongoose");

const falseBool = { type: Boolean, default: false };
const reqStr = { type: String, required: true };

const packingListSchema = mongoose.Schema(
  {
    shelter: [
      {
        name: reqStr,
        isPacked: falseBool,
      },
    ],
    clothing: [
      {
        name: reqStr,
        isPacked: falseBool,
      },
    ],
    kitchen: [
      {
        name: reqStr,
        isPacked: falseBool,
      },
    ],
    personal: [
      {
        name: reqStr,
        isPacked: falseBool,
      },
    ],
    other: [
      {
        reqStr: reqStr,
        isPacked: falseBool,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("PackingList", packingListSchema);
