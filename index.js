const exp = require('express');
const app = exp();
require( 'dotenv' ).config();
const path = require('path')
const enrutador = require('./router')
const controladorProducto = require('./bakend/controller/productos.controller')

app.use(exp.urlencoded({extened: false}));
app.use(exp.json());

app.use('/', enrutador)

// -- EJS -- //

app.set('view engine','ejs');
app.set('views', path.join(__dirname, './frontend/views/'));


app.get('/', controladorProducto.listarProducto)

app.get('/about', (req, res) => {
    res.render('pages/about')
})

// Cambiamos el número de puerto por la variable que creamos en el archivo de entorno con el puerto => process.env.PORT
app.listen(process.env.PORT, ( ) => {
    console.log("Servidor en línea")
});