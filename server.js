var express = require("express");
var app = express();

app.listen(process.env.PORT|| 3000);

app.get("/", (req,res)=>{
    res.send('This is a sample page for defuse round 3  ');
})
