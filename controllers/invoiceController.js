const Invoice = require("../models/Invoice");
const Client = require("../models/Client");
const Company = require("../models/Company");
const Item = require("../models/Item");

const createInvoice = async (req, res) => {
  try {
    const { 
      companyName, companyEmail, companyCountry, companyCity, companyPostalCode, companyStreetAddress,
      clientName, clientEmail, clientCountry, clientCity, clientPostalCode, clientStreetAddress,
      invoiceDate, paymentTerms, projectDescription, items 
    } = req.body;
    

    if (!companyName || !clientName || !items || items.length === 0) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const company = new Company({
      companyName,
      companyEmail,
      companyCountry,
      companyCity,
      companyPostalCode,
      companyStreetAddress
    });
    await company.save();

    const client = new Client({
      clientName,
      clientEmail,
      clientCountry,
      clientCity,
      clientPostalCode,
      clientStreetAddress
    });
    await client.save();

    const invoice = new Invoice({
      companyId: company._id,
      clientId: client._id,
      invoiceDate,
      paymentTerms,
      projectDescription,
    });
    await invoice.save();

    const itemRecords = items.map(item => ({
      itemName: item.itemName,
      qty: item.qty,
      price: item.price,
      total: item.total,
      invoiceId: invoice._id,
    }));
    await Item.insertMany(itemRecords);

    console.log("Invoice saved successfully:", invoice);
    res.status(201).json({ message: "Invoice saved successfully", invoiceId: invoice._id });

  } catch (error) {
    console.error("Error Saving Invoice:", error);
    res.status(500).json({ message: "Error saving invoice", error: error.message });
  }
};

module.exports = { createInvoice };
