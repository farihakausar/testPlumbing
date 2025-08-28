// models/PlumbingPage.js
const mongoose = require('mongoose');

const PlumbingPageSchema = new mongoose.Schema({
    images: {
        drainageExpert: String,
        openVan: String
    },
    hero: {
        title: String,
        subtitle: String
    },
    form: {
        title: String,
        subtitle: String
    },
    section1: {
        title: String,
        content1: String,
        content2: String,
        buttonText: String
    },
    coreServices: {
        title: String,
        services: [{
            title: String,
            points: [String]
        }]
    },
    section2: {
        title: String,
        content: String,
        list: [String],
        buttonText: String
    }
}, { strict: false });

module.exports = mongoose.model('PlumbingPage', PlumbingPageSchema,"plumbingpages");