const exp = require('express');
const app = exp();
require( 'dotenv' ).config();

const enrutador = require('./router')

app.use(exp.urlencoded({extened: false}));
app.use(exp.json());

app.use('/', enrutador)
// Cambiamos el número de puerto por la variable que creamos en el archivo de entorno con el puerto => process.env.PORT
app.listen(process.env.PORT, ( ) => {
    console.log("Servidor en línea")
});