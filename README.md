# Invoice Management API 🚀

A **Node.js + Express + MongoDB** REST API for managing invoices, clients, companies, and items.

## 📌 Features
- Create invoices with related **clients, companies, and items**.
- Saves data in **MongoDB Atlas** or local MongoDB.
- Uses **Mongoose ODM** for schema-based data modeling.
- Supports **CORS** for frontend communication.
- Environment-based configuration with **dotenv**.

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Tools**: Dotenv, Nodemon, CORS, Body-parser

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/invoice-api.git
cd invoice-api
npm install
```

### 2️⃣ Configure Environment Variables
- Create a .env file in the root directory:

```sh
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/InvoiceData?retryWrites=true&w=majority
```

### 3️⃣ Start the Server
####  development (auto-restarts):

```sh
npx nodemon server.js
```