const modeloUsuario = require('../models/usuario.models')

exports.listarUsuarios = async (req,res) => {
    let listaUsuario = await modeloUsuario.find();
    if(listaUsuario)
        res.status(200).json(listaUsuario);
    else
        res.status(404).json({error: "No se encontraron usuarios"});
}