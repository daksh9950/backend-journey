const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect('mongodb+srv://dakshjeet6361_db_user:JNzcqHtOgS0MJuhj@cluster0.aauiz04.mongodb.net/')
    .then((req,res)=>{
        console.log('connect to database')
    })
}

module.exports = connectToDb