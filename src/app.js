const path = require('path')
// NPM modules
const express = require('express')
const app = express()
//Define Paths for Express Configuration
const htmlPath = path.join(__dirname, '../public')
//Setup Static directory to serve
app.use(express.static(htmlPath))
// INDEX
app.get('/', (req,res)=>{
    res.render('index')
})
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log("Server is Running on port: ", port)
})

// Loda lesson