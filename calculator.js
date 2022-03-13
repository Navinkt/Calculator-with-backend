//jshint expression:6

const express = require("express");
const bodyParser =require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({extend:true}));
 app.get("/",function(req,res)
 {
     res.sendFile(__dirname+"/index.html");
 });
 app.post("/",function(req,res)
 {  var num1= Number(req.body.n1);
    var num2= Number(req.body.n2);
    var result =num1+num2;
    res.send("result " + result); 
 })
 app.listen(3000,function(){
  console.log("Server is running");
 });
