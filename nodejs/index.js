const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('Hello World')
})


app.get('/init', function (req, res) {
    var json = JSON.stringify({ name: "Alvaro", lastname: "Aguinaga" })
    res.send(json)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})