const express=require("express");
const app=express();
const port=80;
const path=require('path')


//middle marware
const staticpath=path.join(__dirname,'../public');
app.use(express.static(staticpath))

//app.set('view engine','hbs')


app.get('/',(req,res)=>{
    res.send("this is our about page")
})

//app.get('/about',(req,res)=>{
    //res.render('about')
//})


//app.get('/contact',(req,res)=>{
    //res.render('contact')
//})
app.listen(port,()=>{
   console.log(`the app is running on port ${port}`)
})