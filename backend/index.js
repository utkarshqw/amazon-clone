const express = require("express");
const cors = require("cors");

// const product = require("./routes/product.router");
const user = require("./routes/user.router");
const mobile = require("./routes/mobile.router");
const comment = require("./routes/comment.router")

const connectdatabase = require("./config/db");
const errorMilddlerware = require("./middleware/error");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", user);
app.use("/product", mobile);
app.use("/comment",comment)



connectdatabase();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
