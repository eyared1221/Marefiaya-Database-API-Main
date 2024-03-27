import mongoose from 'mongoose';

const adoptiveParentSchema = new mongoose.Schema({
// Parent Details: describe the foster parent of a child
// Foster father's detail
    father_name: {
        type: String,
        required: [true, "please insert father's name"]
    },
    nicNumber: {
        type: String,
        required: [true, "please insert the father's nicNumber."]
    },
    contact_number: {
        type: Number,
        required: [true, "please insert the father's phone number"],
        minLength: 10,
        maxLength: 10,
        validate: {
            validator: Number.isInteger,
            message: "Contact number must be whole number"
        }
    },
    date_of_birth: {
        type: Date, // '1990-01-01'
        required: [true, "please select father's date of birth"]
    },
    occupation: {
        type: String,
        required: [true, "please insert the father's occupation."]
    },
    // Foster mother's detail
    mother_name: {
        type: String,
        required: [true, "please insert mother's name"]
    },
    nicNumber: {
        type: String,
        required: [true, "please insert the mother's nicNumber."]
    },
    contact_number: {
        type: Number,
        required: [true, "please insert the mother's phone number"],
        minLength: 10,
        maxLength: 10,
        validate: {
            validator: Number.isInteger,
            message: "Contact number must be whole number"
        }
    },
    date_of_birth: {
        type: Date, // '1990-01-01'
        required: [true, "please select mother's date of birth"]
    },
    occupation: {
        type: String,
        required: [true, "please insert the mother's occupation."]
    },
    // address of the foster parents
    address_location: {
        type: String,
        required: [true, "please provide parent's address location"]
    },
    email: {
        type: String,
        required: [true, "please insert parent's email address"],
        validate: {
            validator: function (value) {
                // Regular expression pattern for email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: "Please enter a valid email address"
        }
    },
});


const adoptiveParent = mongoose.model('adoptiveParent', adoptiveParentSchema);

export default adoptiveParent;

