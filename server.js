const express = require('express')
const mongoose= require('mongoose')

const app = express()
// connect mongo
mongoose.connect("mongodb://localhost/postapp", (err)=>{
    if(err){
        console.log('Database connection failed', err)
    }else{
        console.log("Database connected !")
    }
})
app.use(express.json())

// import router
const postRouter= require('./router/routePost')
app.use('/api', postRouter)

const port =process.env.PORT || 1122

app.listen(port,()=>{
    console.log('server is connected 1122...');
})