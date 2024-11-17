import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const uri = process.env.MON;

const connect_db = async() => {

    try{
        //connecting the mongoDB.the URL store in dotenv file
        mongoose.set('bufferCommands',false);
        mongoose.set("bufferTimeoutMS",30000);
       await mongoose.connect(uri)
       console.log("database connected")
    }
    catch(err){
        console.log(err)
    }
    
}
export default connect_db
