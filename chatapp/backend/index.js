import mongoose from "mongoose";
import 'dotenv/config';
import express from "express";
import User from "./model/user.model.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
    origin : process.env.CORS_ORIGIN,
}))

app.post('/login' , async (req,res) => {

    try {
        
        const {email , password} = req.body;

        const userExists = await User.findOne({email});
        if(!userExists){
            throw new Error("Email not found.");
        }

        console.log(userExists);
        
        const isMatch = await userExists.comparePassword(password);

        if (!isMatch) {
            throw new Error("Invalid password.");
        }

        res.status(200).json({message: "Login Successfull !"});

        
    } catch (error) {
        if(error.message === "Email not found."){
            res.status(400).json({ error: 'Email not found.' });
        }
        else if(error.message === "Invalid password."){
            res.status(400).json({error : "Invalid Password"});
        }
        else{
            res.status(500).json(error);
        }
    }

})

app.post('/addUser' , async (req,res) => {

    try {

        const { userName, email, password } = req.body;

        const existingUser = await User.findOne({ userName });
        const existingEmail = await User.findOne({ email });

        if (existingUser) {
            // If the username already exists, throw a custom error
            throw new Error('Username already exists');
        }

        if(existingEmail) {
            throw new Error('Email already exists');
        }

        const user = new User(req.body);
        const addeduser = await user.save();
      //  console.log("user added successfully");
        res.status(200).json(addeduser);

    } catch (error) {
        if (error.message === 'Username already exists') {
            res.status(400).json({ error: 'Username already exists.' });
        }
        else if(error.message === 'Email already exists'){
            res.status(400).json({ error: 'Email already exists.' });
        }
        else {
            console.error('Error signing up user:', error);
            res.status(500).json({ error: 'Server error' });
          }
    }
})

app.put('/updateUser/:id' , async (req,res) => {

    try {
        
        const {id} = req.params;
        const user =  await User.findByIdAndUpdate(id , req.body);

        if(!user){
            return res.status(500).json({message : "no user found with this id"});
        }

        const updateUser = User.findById(id);
        res.status(200).json(updateUser);

    } catch (error) {
        console.log("got some error");
        res.status(500).json(error);
    }
})

mongoose.connect(`${process.env.MONGODB_URI}/user`).then(() => {
    console.log("db connected");
    app.listen(process.env.PORT, () =>{
        console.log(`litening on port ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("unable to connect to db");
})



