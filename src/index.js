const express = require("express");
const bodyparse = require("body-parser");
const cors = require("cors");

//Importacion de rutas
const platillosRoutes = require("./routes/platillos.routes");

const app = express();

app.use(bodyparse.urlencoded({ extended: false }));
app.use(bodyparse.json());

app.use(cors());
app.use("/platillos", platillosRoutes);

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});
