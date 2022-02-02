const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express');
const app = express();
const PORT = 8000
require('./connection/conn')
const productRoute = require('./routes/Route')
const authRoute = require('./routes/userrouter')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/api',productRoute)
app.use('/auth',authRoute)

app.get('/',(req,res)=>{
res.send('Invaliod credentials')
})

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`)
})
