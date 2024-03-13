const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/usersDatabase");

const userSchema = mongoose.Schema({
    _id: {
        type: String,
        default: () => Math.random().toString(36).substr(2,9)
    },
    username:String,
    password:String,
    courses:[{type: mongoose.Schema._id, ref:"Adminss"}]
});

module.exports = mongoose.model("Users", userSchema);