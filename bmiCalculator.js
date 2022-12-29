//jshint esversion:6

const express = require('express');

const app = express();

// to get the user-input to the server

const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));

// -------------------------------------------------

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"\\bmiCalculator.html");
})

app.post("/",function(req,res)
{
    let height = parseFloat(req.body.Height);
    let weight = parseFloat(req.body.Weight);
    let bmi = weight/(height*height);
    res.send("The BMI is "+bmi);
})

app.listen(3000,function()
{
    console.log("Hello User");
});
