const mongoose = require('mongoose');
const{ Schema } = mongoose;
const userSchema = new Schema({
    firstname : {
        type: String,
        required: true,
    },
    lastname : {
        type: String,
        required: true,
    },
    username: {
        type : String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
    },
    email: {
        type : String,
    }
});

module.exports = mongoose.model('User', userSchema)