// models/CommercialGas.js
const mongoose = require('mongoose');

const CommercialGasSchema = new mongoose.Schema({
    images: {
        openVan: String,
        manFromBack: String,
        applianceServicing: String,
        gasSafeLogo: String,
        emergencyService: String,
        industrialSolutions: String
    },
    hero: {
        title: String,
        subtitle: String
    },
    form: {
        title: String,
        subtitle: String
    },
    trustRating: String,
    sections: {
        installation: { title: String, content: String, list: [String] },
        heating: { title: String, content: String, list: [String] },
        servicing: { title: String, content: String, list: [String] },
        safety: { title: String, content: String },
        emergency: { title: String, content: String, list: [String] },
        industrial: { title: String, content: String, list: [String] }
    },
    industries: {
        title: String,
        subtitle: String,
        items: [{ icon: String, text: String }]
    },
    whyChooseUs: {
        title: String,
        subtitle: String,
        features: [String],
        buttonText: String
    }
}, { strict: false });

module.exports = mongoose.model('CommercialGas', CommercialGasSchema,commercialgas);