const express = require("express");
const bodyparse = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyparse.urlencoded({ extended: false }));
app.use(bodyparse.json());

app.use(cors());

app.listen(6000, () => {
  console.log("Server is running on port 7000");
});
