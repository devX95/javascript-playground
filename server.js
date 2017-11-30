const express = require('express');
//rendering engine 
const hbs = require('hbs');

var app = express();

//Set Partials
hbs.registerPartials(__dirname + 'path of partials');

//Set rendering engine
app.set('view engine', 'hbs');

//Use static html pages
app.use(express.static(__dirname + '/public'));

//Set middleware
app.use((req, res, next) => {
    next();
});

//set pages with no engine
app.get("/", (req, res)=>{
    res.send("<h1>This is a page</h1>");
})

//render pages with hbs engine
app.get("/about", (req, res) => {
    res.render('about.hbs', /*data in*/ {
        pageTitle: "About page"
    });
});

app.listen(3000, ()=>{
    console.log("Server up on port 3000");
});