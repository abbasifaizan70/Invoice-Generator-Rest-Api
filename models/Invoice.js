const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  invoiceDate: { type: Date, required: true },
  paymentTerms: { type: String, required: true },
  projectDescription: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
