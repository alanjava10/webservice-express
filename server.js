const express = require('express')
const app = express()

var hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
    //Expres HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Alan C',
        // anio: new Date().getFullYear()
    });


})


app.get('/about', (req, res) => {

    res.render('about', {
        // anio: new Date().getFullYear()
    })

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})