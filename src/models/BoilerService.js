// models/BoilerService.js
const mongoose = require('mongoose');

const BoilerServiceSchema = new mongoose.Schema({
    hero: {
        title: String,
        subtitle: String,
        benefits: [String]
    },
    form: {
        title: String,
        subtitle: String
    },
    coreServices: {
        title: String,
        subtitle: String,
        services: [{
            title: String,
            points: [String]
        }]
    },
    whyChooseUs: {
        title: String,
        subtitle: String,
        reasons: [String]
    },
    cta: {
        title: String,
        subtitle: String,
        buttonText: String
    }
}, { strict: false });

module.exports = mongoose.model('BoilerService', BoilerServiceSchema);