const express = require('express');
const app = express();
const Customer=require('./routes/customer')

const port = 4000;

app.use(express.json())
app.use('/customer',Customer)

app.get('/',(req,res)=>{
    console.log(`get request has come`);
    res.send('Hello world!')
})


app.listen(port,(req, res)=>{
    console.log(`express app listening on port ${port}`);
})