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

       // console.log(userExists);
        
        const isMatch = await userExists.comparePassword(password);

        if (!isMatch) {
            throw new Error("Invalid password.");
        }
        const finalUser = await User.findOne({email});
        res.status(200).json(finalUser);

        
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
        const {  email } = req.body;
        const existingEmail = await User.findOne({ email });

        if(existingEmail) {
            throw new Error('Email already exists');
        }

        const user = new User(req.body);
        const addeduser = await user.save();
        res.status(200).json(addeduser);

    } catch (error) {
        if(error.message === 'Email already exists'){
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

app.get('/api/search' , async (req,res) => {

        try {
            const {q} = req.query;
        //console.log(q);
        const users = await User.find({
            $or: [
              { firstName: { $regex: new RegExp(q, 'i') } }, // Search in firstName
              { lastName: { $regex: new RegExp(q, 'i') } }    // Search in lastName
            ]
          });

            res.status(200).json(users);       
        
        } catch (error) {
            res.status(500).json(error.message);
        }

        
});

mongoose.connect(`${process.env.MONGODB_URI}/MyDb`).then(() => {
    console.log("db connected");
    app.listen(process.env.PORT, () =>{
        console.log(`litening on port ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("unable to connect to db");
})



