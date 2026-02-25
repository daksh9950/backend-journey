const mongoose = require('mongoose')

const noteschema = new mongoose.Schema({
     title:String,
     description:String,
})

const noteMOdel = mongoose.model('notes',noteschema)

module.exports = noteMOdel