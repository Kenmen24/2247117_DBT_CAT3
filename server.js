const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://kenmen240901:Louevaken8421@cluster0.tkwnjvb.mongodb.net/StudentDB", {useNewUrlParser: true}, {useUnifiedTopology: true});

//create a data schema
const studentSchema ={
    name: String,
    age: String
}

const students=mongoose.model("students", studentSchema);


app.get("/", function(req,res){
    //res.send("Hello world");
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res) {
    let newStud = new students({
        name: req.body.name,
        age: req.body.age
    })
    newStud.save();
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Server is running at 3000");
})