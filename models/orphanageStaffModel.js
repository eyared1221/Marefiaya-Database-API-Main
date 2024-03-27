import mongoose from 'mongoose';

const orphanageStaffSchema = new mongoose.Schema({

    // Personal Information
    name: {
        type: String,
        required: [true, "please insert your name"]
    },
    nicNumber: {
        type: String,
        required: [true, "Please insert your NIC number"]
    },
    gender: {
        type: String,
        required: [true, "please insert your gender"]
    },
    contact_number: {
        type: Number,
        required: [true, "please insert your phone number"],
        minLength: 10,
        maxLength: 10,
        validate: {
            validator: Number.isInteger,
            message: "Contact number must be whole number"
        }
    },
    date_of_birth: {
        type: Date, // '1990-01-01'
        required: [true, "please select your date of birth"]
    },
    address_location: {
        type: String,
        required: [true, "please provide your address location"]
    },
    email: {
        type: String,
        required: [true, "please insert your email"],
        validate: {
            validator: function (value) {
                // Regular expression pattern for email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: "Please enter a valid email address"
        }
    },
    password: {
        type: String,
        required: [true, "please insert your password"],
        minLength: 8,
    },
    role: {
        type: String,
        required: [true, "please insert your role in the orphanage"],
        enum: [
            'Orphanage Manager/Director',
            'Social Worker',
            'Caregivers/Nannies',
            'Education Coordinator/Teacher',
            'Medical Staff/Nurse',
            'Psychologist/Counselor',
            'Administrative Staff',
            'Maintenance/Support Staff'
        ]
    },

    // Affiliated organization 
    organization_name: {
        type: String,
    },
    purpose_of_interaction: {
        type: String,
        enum: [
            'Employment',
            'Contractual Agreement',
            'Referral Network',
            'Professional Association',
            'Resource Sharing',
            'Collaboration and Support'
        ]
    },

    // Documents
    birthCertificate: { // import fs
        type: Buffer,
        required: [true, "Please upload your birth certificate"]
      },
      kebeleID: {
        type: Buffer,
        required: [true, "Please upload your kebele ID"]
      }
});


const orphanageStaff = mongoose.model('orphanageStaff', orphanageStaffSchema);

export default orphanageStaff;

/*
const fs = require('fs');

const birthCertificateData = fs.readFileSync('path/to/birth/certificate.pdf');

const newUser = new User({
  birthCertificate: birthCertificateData,
  // Other field values
});

newUser.save()
  .then(savedUser => {
    console.log("User saved:", savedUser);
  })
  .catch(error => {
    console.error("Error saving user:", error);
  });

  */