const DB = [
    { id: 1, platillo: 'Mole', descripcion: 'Un tradicional platillo mexicano lleno de historia, una combinación de varios chiles y especias'},
    { id: 2, platillo: 'Pozole', descripcion: 'El pozole es una sopa tradicional mexicana hecha a base de granos de maíz nixtamalizados, comúnmente de la variedad cacahuazintle, al que se agregan carnes, verduras y especias muy variadas según la región.'},
    { id: 3, platillo: 'Enchiladas', descripcion: 'Las enchiladas es un plato que en México se elabora con tortilla de maíz enrollada y bañada en alguna salsa picante utilizando chile en su preparación.​'},
  ];


    const getPlatillos = (req, res) => {
        const resultado = {
            messages: 'Todo en OK desde el archivo de rutas',
            success: true,
            data: DB,
        };

        return res.json(resultado);
    };
    