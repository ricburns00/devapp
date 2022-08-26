const express = require('express');
const app = express();
const port = 8080

app.listen (port, () => {
    console.log(`Server is running on port ${port}`)
})

app.get('/', (req, res) => {
    res.redirect('/request/NoName')
})
app.get('/request/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`)
})