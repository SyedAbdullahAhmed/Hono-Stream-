const mongoose = require('mongoose');

type Users = {
    name: string,
    email: string,
    password: string,
    age: number,
    isVerified: Boolean
}
const usersSchema:Users = new mongoose.Schema({
  name: {
    type: String,
    unique: [true,"Name must be unique!"],
    required: [true,"Name is req!"]
  },
  email: {
    type: String,
    unique: [true,"Email must be unique!"],
    required: [true,"Email is req!"]
  },
  age: {
    type: Number,
    required: [true,"Age is req!"]
  },
  password: {
    type: String,
    required: [true,"Password is req!"]
  },
  isVerified: {
    type: Boolean,
    default: false,
  }
});

const UserModel = mongoose.model('User', usersSchema);

export {UserModel}