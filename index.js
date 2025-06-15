const exp = require('express');
const app = exp();

require( 'dotenv' ).config();

const logger = require('morgan');
app.use(logger('dev'));

app.use(exp.urlencoded({extened: false}));
app.use(exp.json());

const modeloCliente = require('./backend/models/cliente.models')


app.get('/Cliente/:ref', async (req,res) => {
    let listaCliente = await modeloCliente.findOne({documento:req.params.ref});
    if(listaCliente)
        res.status(200).json(listaCliente);
    else
        res.status(404).json({error: "No se encontraron clientes"});
})

app.post('/Cliente', async (req, res) => {
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

})

const modeloClienteOtro = require('./backend/models/clienteOtro.models')

app.put('/usuarios/:email',  async (req,res)=>{
    
    // let usuarioEditado = {
    //     nombre : req.body.name,  //datos quemados, siempre pondría lo mismo
    //     edad : req.body.age, 
    //     correo : req.params.email  //dato quemado. siemrpe va buscar el mismo crreo. no se puso el correo como el parametro
    // }

    //buscar dif entre const y let
    let usuarioEditado = req.body
    //falta el await
    //nombre variable modelo -> modeloCliente
    let resultado = await modeloClienteOtro.findOneAndUpdate({correo:req.params.email}, usuarioEditado) 
    if (resultado){
        res.status(200).json({"mensaje": "actualizacion exitosa"})
    }else{
        res.status(404).json({"mensaje": "se presentó un error"})
    }
})


app.put('/Cliente/:doc', async (req,res) => {
    const clienteEditado = {
        documento: req.params.doc,
        nombreCompeleto: req.body.nombreCompeleto,
        FNacimiento: req.body.FNacimiento,
    }

    let Actualizacion = await modeloCliente.findOneAndUpdate({documento:req.params.doc},clienteEditado);
    if(Actualizacion)
        res.status(200).json({"mensaje":"actualización exitosa"})
    else
        res.status(404).json({"mensaje":"Se presentó un error"})

})

app.patch('/Cliente', async (req, res, next) => {
    //https://medium.com/@sammed.patil29/implementing-a-patch-request-for-partial-updates-in-express-js-6b42aef945e4


})

app.delete('/clientes/:id', async (req,res) => {
    console.log(req.params.id , req.body.documentoCliente)
    let eliminacion = await modeloCliente.findOneAndDelete({_id:req.params.id});
    if(eliminacion)
        res.status(200).json({"mensaje": "eliminacion exitosa"})
    else
        res.status(400).json({"mensaje":"Se presentó un error"})
})

// exportacion y CRUD de modelo PRODUCTOS

const modeloProducto = require('./backend/models/productos.models')
//todos los productos

//Un producto, buscado por referencia
app.get('/Productos/:referencia', async (req,res) => {
    let productoEncontrado = await modeloProducto.findOne({referencia:req.params.ref});
    if(productoEncontrado)
        res.status(200).json(productoEncontrado);
    else
        res.status(404).json({error: "Producto no encontrado"});
})

// Cambiamos el número de puerto por la variable que creamos en el archivo de entorno con el puerto => process.env.PORT
app.listen(process.env.PORT, ( ) => {
    console.log("Servidor en línea")
});