var express = require("express");
var app = express();
const port= process.env.PORT || 3000;

app.post("/15061999", (req,res)=>{
    res.send('This is a sample page for defuse round 3  \n Your mission is to setup a random sequence genrator with the output 2,3,4,5,6 \n Also send this sequence to your team mate using the controller given to you.');
})
app.listen(port,()=>{console.log(`Listening on ${port}`);

}

);
