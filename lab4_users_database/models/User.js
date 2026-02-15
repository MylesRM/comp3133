const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 100
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email address"]
    },

    address: {
        city: {
            type: String,
            required: true,
            match: [/^[A-Za-z\s]+$/, "City must contain only alphabets and spaces"]
        },
        zipcode: {
            type: String,
            required: true,
            match: [/^\d{5}-\d{4}$/, "Zipcode must be in DDDDD-DDDD format"]
        }
    },

    phone: {
        type: String,
        required: true,
        match: [/^1-\d{3}-\d{3}-\d{4}$/, "Phone must be in 1-123-123-1234 format"]
    },

    website: {
        type: String,
        required: true,
        match: [/^https?:\/\/.+/, "Website must be a valid URL"]
    }
});

module.exports = mongoose.model("User", userSchema);
