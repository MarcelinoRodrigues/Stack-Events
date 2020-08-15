const express = require("express")
const app = express()
let path = require("path")

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/../index.html"))
})

app.get("/send",(req,res)=>{
    res.send("Evento Criado Com sucesso!")
})

app.listen(9090)