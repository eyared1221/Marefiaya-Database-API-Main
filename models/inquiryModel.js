import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({

    // Personal Information
    full_name: {
        type: String,
        required: [true, "please insert your full name"]
    },
    id_number: {
        type: String, 
        required: [true, "please insert your id number"]
    },
    subject: {
        type: String,
        required: [true, "please insert subject of the inquiry."]
    },
    inquiry_message: {
        type: String,
        required: [true, "please insert a breif description about the inquiry."]
    },
    inquiry_document: { 
        type: Buffer,
        required: [true, "Please upload documents realated to the inquiry"]
    },
    date_of_inquiry: {
        type: Date,
        required: [true, "please insert the date of your inquiry."]
    },
});


const inquiry = mongoose.model('inquiry', inquirySchema);

export default inquiry;

