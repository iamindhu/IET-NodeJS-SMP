const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    res.redirect("/home");
});

app.get("/home", (req,res) =>{
    res.render('index');
});

app.get("/create", (req, res) =>{
    res.render('create');
});

app.get("/read", (req, res) =>{
    const blogs = [{title: 'blog1', snippet:'content1'},
    {title: 'blog2', snippet:'content2'},
    {title: 'blog3', snippet:'content3'}]

    res.render('read', {blogs:blogs});
});

app.post("/create", (req, res) =>{
    console.log(req.body);
});
app.get("*", (req, res) =>{
    res.status(404).render('404');
});

app.listen(3000, function(){
    console.log('Server started at port 3000');
});
