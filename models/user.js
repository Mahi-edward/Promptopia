import { models, model, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unqiue: [true, "Email already exists"],
    required: [true, "Email is Required"],
  },
  username: {
    type: String,
    required: [true, "Username is Required"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;
