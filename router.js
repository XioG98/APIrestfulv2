const controladorProducto = require('./bakend/controller/productos.controller')
const controladorCliente = require('./bakend/controller/cliente.controller')
const controladorUsuario = require('./bakend/controller/usuario.controller')
// const exp = require('express');
// const router = exp.Router()

const router = require('express').Router()

//PRODUCTOS
router.get('/productos',controladorProducto.listarProducto)

//CLIENTES
router.get('/clientes',controladorCliente.listarCliente)
router.get('/clientes:ref',controladorCliente.listarClienteByDoc)
router.post('/clientes',controladorCliente.listarCliente)
router.put('/clientes/:doc',controladorCliente.listarCliente)
router.delete('/clientes/:id',controladorCliente.listarCliente)

//USUARIOS
router.get('/usuario',controladorUsuario.listarUsuarios)


module.exports = router