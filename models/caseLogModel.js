import mongoose from 'mongoose';

const caseLogSchema = new mongoose.Schema({

// cases: adoption, guardianship, foster care, custody, palcement, immigration

    case_name: {
        type: String,
        required: [true, "please insert the case name"]
    },
    caeLog_name: {
        type: String, 
        required: [true, "please insert the name of the case log"]
    },
    caseLog_description: {
        type: String,
        required: [true, "please insert a brief description about the case."]
    },
    caseLog_Documents: {
        type: Buffer,
        required: [true, "please insert the documents related to the case log."]
    }
});


const caseLog = mongoose.model('caseLog', caseLogSchema);

export default caseLog;

