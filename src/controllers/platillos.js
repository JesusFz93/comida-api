const DB = [
  {
    id: 1,
    platillo: "Mole",
    descripcion:
      "Un tradicional platillo mexicano lleno de historia, una combinación de varios chiles y especias",
  },
  {
    id: 2,
    platillo: "Pozole",
    descripcion:
      "El pozole es una sopa tradicional mexicana hecha a base de granos de maíz nixtamalizados, comúnmente de la variedad cacahuazintle, al que se agregan carnes, verduras y especias muy variadas según la región.",
  },
  {
    id: 3,
    platillo: "Enchiladas",
    descripcion:
      "Las enchiladas es un plato que en México se elabora con tortilla de maíz enrollada y bañada en alguna salsa picante utilizando chile en su preparación.​",
  },
];

const getPlatillos = (req, res) => {
  const resultado = {
    messages: "Todo en OK desde el archivo de rutas",
    success: true,
    data: DB,
  };

  return res.json(resultado);
};

const  detalle = (req, res) => {
  const id = req.params.id;
  const buscarPorId = DB.find((platillo) => platillo.id.toString() === id);

  if (buscarPorId) {
    return res.json(buscarPorId);
  } else {
    return res.status(404).send();
  }
};

const guardaPlatillo = (req, res) => {
  const alta = req.body;
  const agregar = {
    id: DB.length + 1,
    platillo: alta.platillo,
    descripcion: alta.descripcion,
  };

  DB.push(agregar);

  return res.status(201).json();
};

module.exports = {
  getPlatillos,
  detalle,
  guardaPlatillo
};