const express=require("express");
const cors=require("cors");
const { builtinModules } = require("module");
const app=express()
app.use(cors())

app.get("/",(req,res)=>{
  try{
    res.redirect("https://www.phoebeqiu.com")
  } catch {
    res.send("Redirect failed. We apologize for the inconvenience. ")
  }
    
});

module.exports = (req, res) => {
    app(req, res);
  };

// app.listen("8000", () => {
//     console.log("Connected to port 8000");
// });

