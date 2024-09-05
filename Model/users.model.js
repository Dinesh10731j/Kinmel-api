import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },

  role:{
    type:String,
    enum:['admin','seller','user'],
    default:'user',
  }



});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
