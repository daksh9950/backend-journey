

const express = require('express')
const noteMOdel = require('./model/notes.model')

const app = express()
app.use(express.json())


app.post('/notes',async (req,res)=>{
    const {title,description} = req.body

    const note = await noteMOdel.create({
        title,description
    })

    res.status(201).json({
        message: "Note created sucessfully",
        note
    })

})


/**
 * GET  
 */

app.get('/notes',async(req,res)=>{
    const notes = await noteMOdel.find()

    res.status(200).json({
        message:"notes fetched sucessfully",
        notes
    })


})



module.exports = app