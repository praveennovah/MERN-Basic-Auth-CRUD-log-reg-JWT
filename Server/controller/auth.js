import bcrypt from "bcrypt";
import User from "../Modules/User.js"
import jwt from "jsonwebtoken";


//storing the User Details
export const Register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ msg: "User already exists." });
    }
    //encrypting the user password 
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt); 
    //loading the data into User document
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json({msg : "User Registered Successfully"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login  Handler
export const Login = async(req,res) => {
        try{
          //extracting the email and password
            const {email,password} = req.body;
          //filter the user from the user Document
            const existUser = await User.findOne({email});

            if(!existUser){
                return res.status(404).json({msg : "User not Exists"});
            }
            //comparing the login password
            const decoded_pass = await bcrypt.compare(password,existUser.password);

            if(!decoded_pass){
                return res.status(500).json({msg : "invali password"});
            }
            //payload data to generate the JWT token
            const payload = {
              id : existUser._id,
              email : existUser.email,
              name : existUser.firstName,
            }
            //JWT token
            const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn :'1h'});

            res.status(200).json({msg : "User Loggedin ",token})
        }
        catch(err){
            res.status(500).json({ error: err.message });
        }
}


export const Home = async (req,res)=>{
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
   } catch (err)
    { 
      res.status(500).json({ error: err.message });
   }
}
