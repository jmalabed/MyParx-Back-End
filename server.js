// dependencies
require("dotenv").config();
const express = require("express");
const app = express();
require("./db/db");
const PORT = process.env.PORT || 9000;
const cors = require("cors");

// Controllers
const bucketListController = require("./controllers/bucketList");
const packingListItemController = require("./controllers/packingListItem");
const packingListController = require("./controllers/packingList");

// Cors

const whitelist = [
  "http://localhost:3000",
  "https://myparx.surge.sh/",
  "https://project-two-backend.herokuapp.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by CORS"));
    }
  },
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

app.use("/bucketList", bucketListController);
app.use("/packingListItem", packingListItemController);
app.use("/packingList", packingListController);

app.listen(PORT, () => console.log("listening on port", PORT));
