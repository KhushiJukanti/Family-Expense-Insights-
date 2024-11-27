const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 7000;

mongoose.connect(process.env.Mongo_Uri)
.then(()=>{
    console.log('mongodb connected')
}).catch((error)=>{
    console.log(error)
})

app.get('/', (req, res)=>{
    res.send('Hello Khushi')
})


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})