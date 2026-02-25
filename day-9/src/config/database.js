
const mongoose = require('mongoose')


function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('connect to database')
    })
}

module.exports = connectToDB