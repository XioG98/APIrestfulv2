const controladorProducto = require('./bakend/controller/productos.controller')
const controladorCliente = require('./bakend/controller/cliente.controller')
const controladorUsuario = require('./bakend/controller/usuario.controller')
// const exp = require('express');
// const router = exp.Router()

const router = require('express').Router()

//PRODUCTOS
router.get('/productos',controladorProducto.listarProducto)
router.get('/producto/:referencia',controladorProducto.listarProductoByRef)
router.post('/productos',controladorProducto.ingresarProduto)
router.put('/productos/:ref',controladorProducto.actualizarProducto)
router.delete('/productos/:ref',controladorProducto.deleteProducto)

//CLIENTES
router.get('/clientes',controladorCliente.listarCliente)
router.get('/cliente:doc',controladorCliente.listarClienteByDoc)
router.post('/clientes',controladorCliente.ingresarCliente)
router.put('/clientes/:doc',controladorCliente.actualizarCliente)
router.delete('/clientes/:id',controladorCliente.deleteCliente)

//USUARIOS
router.get('/usuarios',controladorUsuario.listarUsuarios)
router.get('/usuario/:email',controladorUsuario.listarUsuarioByEmail)
router.post('/usuarios',controladorUsuario.ingresarUsuarios)
router.put('/usuario/:email',controladorUsuario.actualizarUsuario)
router.delete('/usuario/:email',controladorUsuario.deleteUsuario)

module.exports = router