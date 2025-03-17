const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  clientCountry: { type: String, required: true },
  clientCity: { type: String, required: true },
  clientPostalCode: { type: Number, required: true },
  clientStreetAddress: { type: String, required: true },
});

module.exports = mongoose.model("Client", ClientSchema);
