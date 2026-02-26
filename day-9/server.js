

const app = require('./src/app')
require('dotenv').config()




const connectToDB = require('./src/config/database')

connectToDB()

app.listen(3000,(req,res)=>{
    console.log("server running on 3000 sucessfully")
})