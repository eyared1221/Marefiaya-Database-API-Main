import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import validator from "validator";

const orphanageStaffSchema = new mongoose.Schema({

    // Personal Information
    idNumber: { 
        type: String,
        required: [true, "Please insert your NIC number"],
    },
    fullName: {
        type: String,
        required: [true, "please insert your full name"],
    },
    gender: {
        type: String,
        required: [true, "please insert your gender"],
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
    address_location: {
        type: String,
        required: [true, "please provide your address location"],
    },
    email: {
        type: String,
        required: [true, "please insert your email"],
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "Password length should be greater than 6 character"],
        select: true,
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
        ],
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
        ],
    },

    // Document
      kebeleDocument: {
        type: Buffer,
        required: [true, "Please upload your kebele ID"],
        //pdf: String,
        //title: String
      }
},
    {
        timestamps: true,
    }
);

// middelwares
orphanageStaffSchema.pre("save", async function () {
    if (!this.isModified) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

export default  mongoose.model('orphanageStaff', orphanageStaffSchema);





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