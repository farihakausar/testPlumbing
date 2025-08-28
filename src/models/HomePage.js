// models/HomePage.js
const mongoose = require('mongoose');

const HomePageSchema = new mongoose.Schema({
    images: {
        infoSection1: String,
        infoSection2: String,
        gasSafeLogo: String
    },
    hero: {
        title: String,
        listItems: [String],
        formTitle: String,
        formSubtitle: String
    },
    infoSection1: {
        title: String,
        content1: String,
        content2: String,
        buttonText: String,
        buttonHighlight: String
    },
    infoSection2: {
        title: String,
        content1: String,
        content2: String,
        footer: String,
        buttonText: String,
        buttonHighlight: String
    },
    testimonials: {
        title: String,
        subtitle: String,
        trustindex: String
    },
    services: {
        title: String,
        subtitle: String,
        items: [{ icon: String, text: String }]
    },
    contact: {
        title: String,
        subtitle: String,
        bullets: [String]
    }
}, { strict: false });

module.exports = mongoose.model('HomePage', HomePageSchema);