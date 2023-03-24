const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/",(req,res)=>{
    res.send("hello world")
})

// http://localhost:3000/add


app.post("/add",(req,res) =>{
    const {num1,num2} = req.body;
    if(typeof num1 !== "number" || typeof num2 !== "number" ){
    res.status(404).json({status: "error",message : "invalid data type"})}
    let add = num1 + num2
    if(add< -1000000 || num1 < -1000000 || num2 < -1000000){
        res.status(400).json({status: "faliure",message:"underflow"})
    }
    if(add > 1000000 || num1 > 1000000 || num2 > 1000000){
        res.status(400).json({status: "faliure",message:"overflow"})
    }
    else{
        res.status(200).json({status: "success",message :`the sum of two numbers is ${add}`})
    }
})

app.post("/sub",(req,res) =>{
    const{num1,num2} = req.body;
    if(typeof num1 !== "number" || typeof num2 !== "number" ){
    res.status(404).json({status: "error",message : "invalid data type"})}
    subtract = num1 -num2
    if(subtract< -1000000 || num1 < -1000000 || num2 < -1000000){
        res.status(400).json({status: "faliure",message:"underflow"})
    }
    if(subtract > 1000000 || num1 > 1000000 || num2 > 1000000){
        res.status(400).json({status: "faliure",message:"overflow"})
    }
    else{
        res.status(200).json({status: "success",message :`the sum of two numbers is ${subtract}`})
    }
})
app.post("/multiply",(req,res) =>{
    const{num1,num2} = req.body;
    if(typeof num1 !== "number" || typeof num2 !== "number" ){
    res.status(404).json({status: "error",message : "invalid data type"})}
    multiply = num1 * num2
    if(multiply< -1000000 || num1 < -1000000 ||num2 < -1000000){
        res.status(400).json({status: "faliure",message:"underflow"})
    }
    if(multiply > 1000000 || num1 > 1000000 || num2 > 1000000){
        res.status(400).json({status: "faliure",message:"overflow"})
    }
    else{
        res.status(200).json({status: "success",message :`the sum of two numbers is ${multiply}`})
    }
})
app.post("/divide",(req,res) =>{
    const{num1,num2} = req.body;
    if(typeof num1 !== "number" || typeof num2 !== "number" ){
    res.status(404).json({status: "error",message : "invalid data type"})}
    divide = num1 / num2
    if(divide< -1000000 || num1 < -1000000 ||num2 < -1000000){
        res.status(400).json({status: "faliure",message:"underflow"})
    }
    if(divide > 1000000 || num1 > 1000000 || num2 > 1000000){
        res.status(400).json({status: "faliure",message:"overflow"})
    }
    else{
        res.status(200).json({status: "success",message :`the sum of two numbers is ${divide}`})
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;