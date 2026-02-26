

const express = require('express')
const noteMOdel = require('./MODEL/note.model')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('./public'))

const notes = []

/**
 * POST 
 * -create new note and save data in mongodb
 * -req.body = {tiitle,description}
 */

app.post('/notes',async(req,res)=>{
    const {title,description} = req.body

    const notes = await noteMOdel.create({
        title,description
    })

    res.status(201).json({
        message: "note created suceessfully",
        notes
    })



}) 

app.get('/notes',async (req,res)=>{
      const notes = await noteMOdel.find()

      res.status(201).json({
        message: 'note fetched sucessfully',
        notes
      })

})

app.delete('/notes/:id',async(req,res)=>{
    const id = req.params.id

    await noteMOdel.findByIdAndDelete(id)

    res.status(201).json({
        message: "note deleted sucessfully"
    })
})

/**
 * patch -> 
 * update the description of the note by id
 * req.bosdy = {description}
 * 
 */

app.patch('/notes/:id',async(req,res)=>{
     const id = req.params.id
     const {description} = req.body

     noteMOdel.findByIdAndUpdate(id,{description})

     res.status(200).json({
        message: 'Note updated sucessfully'
     })
})

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','/public/index.html'))
})


module.exports = app