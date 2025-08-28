// models/Submission.js
const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  name: String,
  phone: String,
  postCode: String,
  email: String,
  question: String,
  fileUrl: String, 
}, { timestamps: true });

const Submission = mongoose.model('Submission', submissionSchema);
module.exports={
    Submission
}
