

const express = require('express')

const app = express()


const notes = []

app.post("/notes", (req, res) => {
    
    console.log(req.body)
})

app.get("/", (req,res)=>{
    res.send("Server Running")
})


module.exports = app