var express = require("express");
var app = express();
const port= process.env.PORT || 3000;

app.post("/15061999", (req,res)=>{
    res.send('Soldiers, our current communication RF channel has the risk of getting intercepted.\n Inorder to avoid this it is advised to use IR for short range communication. So split the team into two and use the microcontrollers to communicate between the subteams using IR.\n  We have developed a custom library to send the coded data from source to destination.\n Use the function encoder from the library  custom_encode to retrieve the data of the bomb location \nand send this data to the second half of the team using an IR LED and diode\n');
})
app.listen(port,()=>{console.log(`Listening on ${port}`);

}

);
