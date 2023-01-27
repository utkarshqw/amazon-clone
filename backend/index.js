const express = require("express");
const product = require("./routes/product.router");
const connectdatabase = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/v1/", product);

connectdatabase();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
