// models/ContactPage.js
const mongoose = require('mongoose');

const ContactPageSchema = new mongoose.Schema({
    info: {
        heading: String,
        phone: { label: String, value: String },
        email: { label: String, value: String },
        address: { label: String, value: String },
        hours: { label: String, value: String }
    },
    form: {
        heading: String
    }
}, { strict: false });

module.exports = mongoose.model('ContactPage', ContactPageSchema);