const express = require('express')
const mongoose = require('mongoose')
const route = require('./Routes/vadhuSuchakRoute')
const vadhuSuchak = require('./Models/vadhusuchak')
const cors = require('cors')
require('dotenv/config')


// Initilization
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// Default route
app.get('/',(req,res)=>{
    res.send("VadhuSuchak info")
})

// main route
app.use('/api/vadhu',route)

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
main()

app.listen(process.env.PORT || 5000)
