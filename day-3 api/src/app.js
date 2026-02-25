

const express = require('express')

let notes = []

const app = express() /**server create ho jata h */

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    

    res.send("note created ")

})

/*GET */ 

app.get("/notes",(req,res)=>{
   res.send(notes)
})

// Delete 

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]

    console.log("node deleted sucessfully")
    

})

// patch 
// req.body = {descrition :- "sample modified  descrition"}

app.patch('/notes/:index',(req,res)=>{
         notes[req.params.index].description = req.body.description
         console.log("node modified successfuffly")
})

module.exports = app