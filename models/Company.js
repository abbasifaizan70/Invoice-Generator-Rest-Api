const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyEmail: { type: String, required: true },
  companyCountry: { type: String, required: true },
  companyCity: { type: String, required: true },
  companyPostalCode: { type: Number, required: true },
  companyStreetAddress: { type: String, required: true },
});

module.exports = mongoose.model("Company", CompanySchema);
