const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  total: { type: Number, required: true },
  invoiceId: { type: mongoose.Schema.Types.ObjectId, ref: "Invoice" },
});

module.exports = mongoose.model("Item", ItemSchema);
