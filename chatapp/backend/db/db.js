import mongoose from "mongoose";
import 'dotenv/config'


const dbConnection = async () => {

    try {
        const dbresponse =  await mongoose.connect(`${process.env.MONGODB_URI}/Mydb`);
        console.log("db connected successfully !!!");

    } catch (error) {
        console.log("db connection error",error);
    }
}

export default dbConnection;