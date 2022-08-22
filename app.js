const express = require('express');
const app = express();

const port = 4000;

app.get('/',(req,res)=>{
    console.log(`get request has come`);
    res.send('Hello world!')
})
app.get('/customer',(req,res)=>{
    console.log(`customer has come`);
    res.send('Hello customer!')
})

app.get('/order',(req,res)=>{
    console.log(`Order has come`);
    res.send('<h1>Hello Order !</h1>')
})

app.listen(port,(req, res)=>{
    console.log(`express app listening on port ${port}`);
})