import mongoose from 'mongoose';

const childProfileSchema = new mongoose.Schema({

    // Child Information
    full_name: {
        type: String,
        required: [true, "please insert the child's full name"]
    },
    date_of_birth: {
        type: Date, // '1990-01-01'
        default: null,
        required: [true, "please select the child's date of birth"]
    },
    gender: {
        type: String,
        required: [true, "please insert the child's gender"]
    },
    //Place of birth
    city: {
        type: String,
        default: null,
        required: [true, "please insert the child's city of birth"]
    },
    country: {
        type: String,
        default: null,
        required: [true, "please insert the child's country of birth"]
    },
    
    nationality: {
        type: String,
        default: "Ethiopian",
        required: [true, "please provide the child's nationality"]
    },
    prefered_language: {
        type: String,
        default: "unknown",
        required: [true, "please insert the language the child is most comfortable with"]
    },
    // Health information
    medical_history: {
        type: String,
        required: [true, "please insert a brief description of any medical conditions or allergies about the child"]
    },
    medical_document: { // import fs
        type: Buffer,
        required: [true, "Please upload documents realated to the medical history of the child"]
    },
    // Family Background  
    // Parents names
    father_name: {
        type: String,
        default: "unknown",
        required: [true, "please insert the name of the child's father."]
    },
    mother_name: {
        type: String,
        default: "unknown",
        required: [true, "please insert the name of the child's mother."]
    },
    reason_for_placement: {
        type: String,
        required: [true, "please insert a breif explanation of why the child is under the care of the orphanage."]
    },
    // Additional Information
    photograph: { // import fs
        type: Buffer,
        required: [true, "Please upload a recent photograph of the child"]
    },
    remaks: {
        type: String,
        required: [true, "if there is any special remarks include here."]
    },
    // Documents
    cpaCertificate: { 
        type: Buffer,
        required: [true, "Please upload child protection authority certificate related to the child."]
      },
      fatherBrithCertificate: {
        type: Buffer,
        required: [true, "Please upload your kebele ID"]
      },
      motherBirthCertificate: {
        type: Buffer,
        required: [true, "please insert a breif explanation of why the child is under the care of the orphanage."]
    },
    // Registration Information
    date_of_admission: {
        type: Date,
        required: [true, "please insert the date of the child's admission."]
    },
});


const childProfile = mongoose.model('childProfile', childProfileSchema);

export default childProfile;

