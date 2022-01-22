const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  const respuesta = {
    status: "ok",
    message: "Get platillos",
  };
  res.status(200).json(respuesta);
});

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
