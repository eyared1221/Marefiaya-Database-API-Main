import mongoose from 'mongoose';

const assignSocialWorkerSchema = new mongoose.Schema({

    case_name: {
        type: String,
        required: [true, "please insert the name of the case"]
    },
    case_description: {
        type: String,
        required: [true, "please insert a brief description about the case."]
    },
    childName: {
        type: String,
        required: [true, "please select a child."]
    },
    socialWorker_Name: {
        type: String,
        required: [true, "please select the social worker assigned to this case."]
    }
});


const assignSocialWorker = mongoose.model('assignSocialWorker', assignSocialWorkerSchema);

export default assignSocialWorker;

