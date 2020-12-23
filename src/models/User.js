import { Schema, Model, model } from "mongoose";

//MongoDB Only

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: String,
  age: Number,
});

export default model("User", UserSchema);
