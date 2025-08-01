
const express=require("express");
const cors=require("cors");

const app=express();
app.use(cors());


app.get('/api/intern',(req,res)=>{
    res.json({
        name:"vijay ram",
        referralcode:"vijay2025",
        donations:1500
    });
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is listening to ${PORT}`);
});