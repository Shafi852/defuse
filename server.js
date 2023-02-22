var express = require("express");
var app = express();
const port= process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.send('This is a sample page for defuse round 3  \n Your mission is to setup a circuit that takes in the input 0123 and gives the output 8338');
})
app.listen(port,()=>{console.log(`Listening on ${port}`);

}

);
