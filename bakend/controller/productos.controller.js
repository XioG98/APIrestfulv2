const modeloProducto = require('../models/productos.models')

exports.listarProducto =  async (req,res) => {
    let listaProducto = await modeloProducto.find();
    if(listaProducto)
      //  res.status(200).json(listaProducto);
         res.render('pages/index', {listaProducto})
    else
        res.status(404).json({error: "No se encontraron productos"});
}

exports.listarProductoByRef =  async (req,res) => {
    let productoEncontrado = await modeloProducto.findOne({referencia:req.params.ref});
    if(productoEncontrado)
        res.status(200).json(productoEncontrado);
    else
        res.status(404).json({error: "Producto no encontrado"});
}

exports.ingresarProduto = async (req, res) => {
     const nuevoProducto = new modeloProducto({
        referencia: req.body.referencia,
        nombre: req.body.nombre,
        descripcion: req.body.descrip,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.img,
        habilitado: req.body.hab,
    });

    nuevoProducto.save()
    .then(Producto => {
        console.log('Producto creado:', Producto);
    })
    .catch(err => {
        console.error('Error al crear cliente: ',err);
    }) 
        res.json("Registo existoso");

}

exports.actualizarProducto = async (req,res)=>{
    let productoEditado = req.body
    let Actualizacion = await modeloProducto.findOneAndUpdate({documento:req.params.doc},productoEditado);
    if(Actualizacion)
        res.status(200).json({"mensaje":"actualización exitosa"})
    else
        res.status(404).json({"mensaje":"Se presentó un error"})

}

exports.deleteProducto = async (req,res) => {
    console.log(req.params.id , req.body.documentoProducto)
    let eliminacion = await modeloProducto.findOneAndDelete({_id:req.params.id});
    if(eliminacion)
        res.status(200).json({"mensaje": "eliminacion exitosa"})
    else
        res.status(400).json({"mensaje":"Se presentó un error"})
}

