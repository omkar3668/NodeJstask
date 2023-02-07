const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    profile: String,
    date: Number,
});

module.exports = mongoose.model("User", userSchema);