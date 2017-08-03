var express = require('express');
var app = express();
// var reload = require("reload");

app.use(express.static("public"));
app.set("view engine", "ejs");

// routing

app.get("/", function(req, res){
    res.render("home");    
});

app.get('/fellinlovewith/:thing', function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
   var posts = [
            {title: 'post 1', author: 'susie'},
            {title: 'You\'ll never believe this adorable pomsky!!', author: 'Charile'},
            {title: 'New recipies for health', author: 'Steve'}
       ] 
       
       res.render("posts",{posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening...");
    
    if(process.send){
        process.send("online");
    }
});