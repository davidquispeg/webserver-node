const express = require('express');
const app = express();
const hbs = require('hbs');
//importa los helpers
require('./hbs/helpers');
//El middleware es una funcion que se ejecuta siempre sin importar el URI que se solicita
app.use(express.static(__dirname + '/public'));
//Para heredar plantillas
hbs.registerPartials(__dirname + '/views/parciales');
// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'david edison'
    });
})
app.get('/about', (req, res) => {
        res.render('about');
    })
    /*
    app.get('/', function(req, res) {
        let salida = {
            nombre: 'David',
            edad: 30,
            url: req.url
        };
        res.send(salida);
        //res.send('Hola Mundo')
    })*/
app.listen(3000, () => {
    //se ejecuta cuando la peticion se ejecuta
    console.log('Escuchando en el puerto 3000')
})