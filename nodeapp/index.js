const express = require('express')
const app = express()
app.get('/',(req,res) => {

    res.send("nodeapp-bueno")
})

app.listen(3000, () => {
    console.log("Rodando porta 3000")
})