const modeloProducto = require('../models/productos.models')

exports.listarProducto =  async (req,res) => {
    let listaProducto = await modeloProducto.find();
    if(listaProducto)
        res.status(200).json(listaProducto);
    else
        res.status(404).json({error: "No se encontraron productos"});
}

