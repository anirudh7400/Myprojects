import mongoose from "mongoose";
import bcrypt from "bcrypt";

const uerSchema = mongoose.Schema({
    userName : {
        type : String,
        required: true,
        trim: true,
        unique: true,
    },
    email : {
        type : String,
        required: true,
        trim: true,
        unique: true,
    },
    password : {
        type : String,
        required: true,
        trim: true,
    }
});

uerSchema.pre('save' , async function(next) {

    const doc = this;

  // Hash the password only if it has been modified (or is new)
  if (!doc.isModified('password')) {
    return next();
  }

  try {
    // Generate a salt with a cost factor of 10
 //   const salt = await bcrypt.genSalt(10);
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(doc.password, 10);
    // Replace the plaintext password with the hashed one
    doc.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
})

uerSchema.methods.comparePassword = async function(plainPassword){

    return bcrypt.compare(plainPassword , this.password);
}

const User = mongoose.model("User",uerSchema);

export default User;