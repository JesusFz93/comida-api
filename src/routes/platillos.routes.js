const { Router } = require("express");
const router = Router();

const { getPlatillos } = require("../controllers/platillos.js");

router.get("/", getPlatillos);

router.get("/:id", (req, res) => {
  const respuesta = {
    status: "ok",
    message: "Get solo un platillo",
  };
  res.status(200).json(respuesta);
});

router.post("/", (req, res) => {
  const respuesta = {
    status: "ok",
    message: "Post platillo",
  };
  res.status(200).json(respuesta);
});

module.exports = router;
