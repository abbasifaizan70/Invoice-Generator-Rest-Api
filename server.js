const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const invoiceRoutes = require("./routes/invoiceRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // ✅ This is needed for JSON parsing
app.use(express.urlencoded({ extended: true })); // ✅ This helps with form data

app.use("/api/invoices", invoiceRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
