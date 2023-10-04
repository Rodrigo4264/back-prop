import { Schema, model } from "mongoose";

const userSchema = new Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  age: {type: Number, required: true, default: 0},
  password: {type: String, required: true},
  role: {type: String, default: "user"},
  isGoogle: {type: Boolean,  required: true, default: false},
  cart: {
    type: Schema.Types.ObjectId,
    ref: "carts",
  },
  
});

export const UserModel = model("Users", userSchema);