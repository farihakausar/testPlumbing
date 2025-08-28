// models/HeatPump.js
const mongoose = require('mongoose');

const HeatPumpSchema = new mongoose.Schema({
    images: {
        engineer: String,
        groundSource: String,
        commercialSystem: String,
        maintenanceVan: String,
        energyAssessment: String,
        mcsLogo: String,
        nateLogo: String,
        localLogo: String
    },
    contact: {
        phone: String,
        email: String,
        website: String
    },
    hero: {
        title1: String,
        title2: String,
        subtitle: String
    },
    form: {
        title: String,
        subtitle: String
    },
    accreditations: {
        prefix: String
    },
    sections: {
        installation: { title: String, content: String, list: [String] },
        repairs: { title: String, content: String, list: [String] },
        maintenance: { title: String, content: String, list: [String] },
        assessments: { title: String, content: String, list: [String] },
        commercial: { title: String, content: String, list: [String] }
    },
    ctaBanner: {
        title: String,
        subtitlePrefix: String
    },
    whyChooseUs: {
        title: String,
        subtitle: String,
        benefits: [{ title: String, text: String }]
    },
    serviceArea: {
        title: String,
        subtitle: String
    },
    footer: {
        title: String,
        subtitle: String
    }
}, { strict: false });

module.exports = mongoose.model('HeatPump', HeatPumpSchema);