
const express = require('express');
const hbs = require('hbs');

require('dotenv').config();



const app = express();

const port = process.env.PORT;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
// servir archivos estáticos


app.get('/', (req, res) => {
    res.render('home');
});

app.use(express.static('public'));

    app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });


// Path: views/home.hbs


