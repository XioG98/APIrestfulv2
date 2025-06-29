const modeloUsuario = require('../models/usuario.models')

exports.listarUsuarios = async (req,res) => {
    let listaUsuario = await modeloUsuario.find();
    if(listaUsuario)
        res.status(200).json(listaUsuario);
    else
        res.status(404).json({error: "No se encontraron usuarios"});
}

exports.listarUsuarioByEmail = async (req,res) => {
    let listaUsuario = await modeloUsuario.findOne({correo:req.params.email});
    if(listaUsuario)
        res.status(200).json(listaUsuario);
    else
        res.status(404).json({error: "No se encontraron clientes"});
}

exports.ingresarUsuarios = async (req, res) => {
     const nuevoUsuario = new modeloUsuario({
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        fechaInscripcion: req.body.fechaInscripcion
    });

    nuevoUsuario.save()
    .then(Usuario => {
        console.log('Usuario creado:', Usuario);
    })
    .catch(err => {
        console.error('Error al crear usuario: ',err);
    }) 
        res.json("Registo existoso");

}

exports.actualizarUsuario = async (req,res)=>{
    let usuarioEditado = req.body
    let Actualizacion = await modeloUsuario.findOneAndUpdate({correo:req.params.email},usuarioEditado);
    if(Actualizacion)
        res.status(200).json({"mensaje":"actualización exitosa"})
    else
        res.status(404).json({"mensaje":"Se presentó un error"})

}

exports.deleteUsuario = async (req,res) => {
    console.log(req.params.email , req.body.emailUsuario)
    let eliminacion = await modeloUsuario.findOneAndDelete({correo:req.params.email});
    if(eliminacion)
        res.status(200).json({"mensaje": "eliminacion exitosa"})
    else
        res.status(400).json({"mensaje":"Se presentó un error"})
}