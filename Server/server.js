import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import connect_db from '../Server/DB_Config/dataBase.js';
import authRoutes from "./Routes/UserRoutes.js"

//middleWare Config
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors()); 

 //setting the Routes
app.use("/v1",authRoutes);

//initializing the server
const start_server = async ()=>{
    try{
        await connect_db();
        app.listen(port,()=>{
            console.log(`server is running on ${port}`)
        })
    }
    catch(err){
        console.log(err) 
    }    
}

start_server()


