const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  name: String,
  age: Number,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

//!  Advance Schema
// const PostSchema = new Schema({
//   name: String,
//   like: Number,
// });
// const UserSchema = new Schema({
//   email: {
//     type: String,
//     required: [true, "Please give an email!"],
//     unique: true,
//   },
//   name: String,
//   age: Number,
//   gender: {
//     type: Boolean,
//     default: true,
//   },
//   language_code: {
//     type: String,
//     enum: ["en", "de", "tr", "uk", "fr"],
//   },
//   posts: [PostSchema],
// });
