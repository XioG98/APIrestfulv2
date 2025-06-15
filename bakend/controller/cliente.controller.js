const modeloCliente = require('../models/cliente.models')

exports.listarCliente =  async (req,res) => {
    let listaCliente = await modeloCliente.find();
    if(listaCliente)
        res.status(200).json(listaCliente);
    else
        res.status(404).json({error: "No se encontraron clientes"});
}

