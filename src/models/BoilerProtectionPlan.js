// models/BoilerProtectionPlan.js
const mongoose = require('mongoose');

const BoilerProtectionPlanSchema = new mongoose.Schema({
    contact: {
        phone: String,
        website: String
    },
    hero: {
        title: String,
        subtitle: String
    },
    form: {
        title: String,
        subtitle: String
    },
    included: {
        title: String,
        subtitle: String,
        items: [{
            title: String,
            text: String
        }],
        addOn: String
    },
    plans: {
        title: String,
        subtitle: String,
        options: [{
            name: String,
            price: String,
            recommended: Boolean,
            features: [{
                text: String,
                enabled: Boolean
            }],
            buttonText: String
        }]
    },
    whyChooseUs: {
        title: String,
        items: [{
            title: String,
            text: String
        }]
    },
    footer: {
        title: String
    }
}, { strict: false }); // strict: false allows data not defined in schema

module.exports = mongoose.model('BoilerProtectionPlan', BoilerProtectionPlanSchema,boilerprotectionplans);
