const { Router } = require("express");
const router = Router();

const {
  getPlatillos,
  detalle,
  guardaPlatillo,
} = require("../controllers/platillos.js");

router.get("/", getPlatillos);

router.get("/:id", detalle);

router.post("/", guardaPlatillo);

module.exports = router;
