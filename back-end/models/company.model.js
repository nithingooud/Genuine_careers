
const mongoose = require('mongoose')

const companyTypes = {
    PRODUCT_BASED: 'Product Based',
    SERVICE_BASED: 'Service Based',
    STARTUP: 'Startup',
    NON_PROFIT: 'Non-Profit',
};

const companySchema = new mongoose.Schema({
    logo: { type: String },
    companyName: { type: String },
    size: { minimum: { type: Number }, maximum: { type: Number } },
    founded: { type: Number },
    companyType: { type: String, enum: Object.values(companyTypes) },
    companyDescription: { type: String },
    website: { type: String },
    Revenue: { type: Number },
    sector: { type: String }
}, { timestamps: true })

mongoose.model('Company', companySchema)