import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import AdminRouter from "./routes/admin.js";
import File from "./models/files.js";

dotenv.config();

const app = express();

app.use(cors({
    origin : "https://kiet-en-tt.onrender.com",
    // origin : "http://localhost:3000",
    methods : ['POST','GET']
}));
app.use(express.json());

app.use("/admin",AdminRouter);

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(port,()=>{
        console.log(`Oh no its working on ${port} .`);
    })
}).catch((err)=>{
    console.log(err);
})

app.get("/display/:classID",async(req,res)=>{
const {classID} = req.params;
try {
    const data = await File.findOne({classID});

    if(!data){
       return res.status(404).json({error : "Invalid ClassID"})
    }

    return res.status(200).json(data);
} catch (error) {
    return res.status(400).json(error);
}
})