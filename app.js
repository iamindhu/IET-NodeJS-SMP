const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

app.use(express.static('public'));

const uri = "mongodb+srv://<username>:<password>@<clustername>.arzsk.mongodb.net/<database_name>?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})
.then((result) => app.listen(3000))
.catch((err)=>console.log(err))



app.get("/", (req, res) =>{
    res.redirect("/home");
});

app.get("/create", (req, res) =>{
    res.render('create', {title:"Create Blogs"});
});

app.get("/about", (req, res) =>{
    res.render('about', {title:"About Us"});
});


app.get("/home", (req, res) =>{
    const blogs = [{title: 'blog1', snippet:'content1'},
                   {title: 'blog2', snippet:'content2'},
                   {title: 'blog3', snippet:'content3'}]

    res.render('home', {blogs:blogs, title:'Read Blogs'});
});

app.post("/create", (req, res) =>{

    console.log(req.body);
});


app.get("*", (req, res) =>{
    res.status(404).render('404', {title:'Error!!'});
});




