const express = require('express');
const app = express();
const order = require("./routes/order");
const item = require("./routes/item");
const customer = require("./routes/customer");

const port = 4000;

app.use(express.json())
app.use("/customer", customer);
app.use("/item", item);
app.use("/order", order);



app.listen(port,(req, res)=>{
    console.log(`express app listening on port ${port}`);
})