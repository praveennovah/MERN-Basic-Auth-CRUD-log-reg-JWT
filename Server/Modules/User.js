import mongoose from "mongoose";
//User Schema to store the user details
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
    },
    password: {
        type : String,
        required : true,
    }
});
//creating the Document "User" and assign the schema
const User = mongoose.model("User",userSchema);

export default User;