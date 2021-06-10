const express    = require("express")
const app        = express()
const bodyParser = require('body-parser')
const cors       = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

/************************************************************************
 *  BASE DE DATOS EMULADA MEDIANTE ARREGLO DE OBJETOS Cliente
 ************************************************************************/
class Cliente {
    constructor(nombre, rut, sueldo) {
        this.nombre = nombre
        this.rut    = rut
        this.sueldo = sueldo
    }
}
var clientes = [
    new Cliente('Pedro',   '14144144-4', 400000),
    new Cliente('Pepito',  '13133133-3', 300000),
    new Cliente('María',   '12122122-2', 200000),
    new Cliente('Ignacho', '15155155',   500000),
    new Cliente('Hector',  '16166166-6', 600000),
    new Cliente('Patricio','17177177-7', 700000),
    new Cliente('Juanita', '18188188-8', 800000),
    new Cliente('Polin',   '19199199-9', 900000)
]
/************************************************************************
 *  MÉTODOS QUE MANEJAN PETICIONES HTTP GET, POST, PUT y DELETE
 ************************************************************************/
app.get('/', function (req, res) {
    console.log('[HTTP GET] CLIENTES')
    res.send(clientes)
})

app.post('/', function(req, res) {
    console.log('[HTTP POST] CLIENTE', req.body)
    clientes.push(req.body)
    console.log('[HTTP POST] CLIENTE AGREGADO')
    res.status(200).send('OK')
})

app.delete('/:rut', function(req, res) {
    console.log('[HTTP DELETE] CLIENTE', req.params.rut)
    let index = clientes.findIndex( cli => cli.rut == req.params.rut)
    if(index != -1) {
        clientes.splice(index, 1)
        console.log('   [DELETED] CLIENTE ' + req.params.rut)
        res.status(200).send('OK')
    } else {
        console.error(' [NOT DELETED] CLIENTE ' + req.params.rut)
        res.status(200).send('NOK')
    }
})

app.put('/', function(req, res) {
    console.log('[HTTP PUT] CLIENTE', req.body)
    let index = clientes.findIndex( cli => cli.rut == req.body.rut)
    if(index != -1) {
        clientes[index] = req.body
        console.log('   [HTTP PUT] CLIENTE MODIFICADO')
        res.status(200).send('OK')
    } else {
        console.error(' [HTTP PUT] CLIENTE NO EXISTE')
        res.status(200).send('NOK')
    }
})
/************************************************************************
 *  SE LEVANTA EL SERVIDOR
 ************************************************************************/
app.listen(3000, () => {
    console.log("SERVIDOR localhost UP PUERTO 3000")
})