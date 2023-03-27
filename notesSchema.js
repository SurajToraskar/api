const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    teacher_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "teacherdetails"
    },
    subject_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "subjects"
    },
    file_path: {
        type: String,
        required: true
    },
    upload_date: {
        type: Date,
        required:true,
        default: Date.now
    }

});

const qpaperModel=mongoose.model('Notes',notesSchema);
module.exports=qpaperModel;