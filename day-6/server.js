/*
    server start karna 
    server database seh connect karna 
     */

const app = require('./src/app')
const mongoose = require("mongoose");


function connectdb(){
    mongoose.connect('mongodb+srv://dakshjeet6361_db_user:DvrTUs8zOWOqjtqG@cluster0.aaqvyua.mongodb.net/day-6')
     .then(()=>{
             console.log('connected to database')
     })
}

connectdb()

app.listen(3000,()=>{
    console.log("server start running on port 3000")


})

