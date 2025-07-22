import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("Users", userSchema);
export default User;
