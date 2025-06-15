const modeloCliente = require('../models/cliente.models')

exports.listarCliente =  async (req,res) => {
    let listaCliente = await modeloCliente.find();
    if(listaCliente)
        res.status(200).json(listaCliente);
    else
        res.status(404).json({error: "No se encontraron clientes"});
}

exports.listarClienteByDoc = async (req,res) => {
    let listaCliente = await modeloCliente.findOne({documento:req.params.ref});
    if(listaCliente)
        res.status(200).json(listaCliente);
    else
        res.status(404).json({error: "No se encontraron clientes"});
}

exports.ingresarCliente = async (req, res) => {
     const nuevoCliente = new modeloCliente({
        documento: req.body.documento,
        nombreCompeleto: req.body.nombreCompeleto,
        FNacimiento: req.body.FNacimiento
    });

    nuevoCliente.save()
    .then(Cliente => {
        console.log('Cliente creado:', Cliente);
    })
    .catch(err => {
        console.error('Error al crear cliente: ',err);
    }) 
        res.json("Registo existoso");

}

exports.actualizarCliente = async (req,res)=>{
    let clienteEditado = req.body
    let Actualizacion = await modeloCliente.findOneAndUpdate({documento:req.params.doc},clienteEditado);
    if(Actualizacion)
        res.status(200).json({"mensaje":"actualización exitosa"})
    else
        res.status(404).json({"mensaje":"Se presentó un error"})

}

exports.deleteCliente = async (req,res) => {
    console.log(req.params.id , req.body.documentoCliente)
    let eliminacion = await modeloCliente.findOneAndDelete({_id:req.params.id});
    if(eliminacion)
        res.status(200).json({"mensaje": "eliminacion exitosa"})
    else
        res.status(400).json({"mensaje":"Se presentó un error"})
}