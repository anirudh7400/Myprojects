import mongoose from "mongoose";
import bcrypt from "bcrypt";

const uerSchema = mongoose.Schema({
  firstName : {
        type : String,
        required: true,
        trim: true,
        index: true,
    },
    lastName : {
      type : String,
      required: true,
      trim: true,
      index: true,
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
    },
    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' // Reference to the User model
  }],
  image: {
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s' // Default image URL
},
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