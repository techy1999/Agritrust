const mongoose = require('mongoose');

// Validate Email.
const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// Farmer Model 
const farmerSchema = new mongoose.Schema({
    farmer_id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
        trim: true,
        minlegth: 3,
        maxlength: 50
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minlegth: 5,
        maxlength: 200
    },
    pin:{
        type: Number,
        required: true,
        trim: true,
        minlength: [6, 'Please enter 6 digit Pin.'],
        maxlength: [6, 'Please enter 6 digit Pin.']
    },
    phone:{
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: [10, 'Please enter 10 digit valid number'],
        maxlength: [10, 'Please enter 10 digit valid number']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    image_url: {
        type: String,
    },
    rating : {
        type: Number,
        required: [true,'Enter rating.'],
    },
    education: {
        type: String,
        trime: true,
        required:[true, "Enter education details"]
    }
},  {timestamps:true, createdAt: 'created_at', updatedAt: 'updated_at' } )


// Exporting userSchema as User  
module.exports = mongoose.model('Farmer', farmerSchema);