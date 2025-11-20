import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/",(req,res)=>{

    try {

        let a = 10;
        console.log(a);
        res.status(200).json({msg : "this is for prac"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }

})
    
app.listen(PORT,()=>{
    console.log(`server started http://localhost:${PORT}`);
})


