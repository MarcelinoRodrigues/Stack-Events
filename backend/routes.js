const express = require('express')
const path = require("path")
const routes = express.Router()

routes.use(express.static(path.join(__dirname, "../public")))

routes.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/../index.html"))
})

routes.get("/send",(req,res)=>{
    res.send("Evento Criado Com sucesso!")
})

module.exports = routes