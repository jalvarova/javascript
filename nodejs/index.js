const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    var contador = 2;
    var na = "na";
    while (contador) {
        na += na;
        contador -= 1;
    }
    console.log(req.params, na + " Walvao ")

    var paki = {
        nombre: "Pakiman",
        ataque: 101
    };
    paki.ataque = paki.ataque * 2;

    res.send('Hello World ' + contador + " " + paki.ataque + " " + Math.ceil(4.64));
})


app.get('/init', function (req, res) {
    var json = JSON.stringify({ name: "Alvaro", lastname: "Aguinaga" })
    res.send(json)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})