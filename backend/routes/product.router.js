const express = require("express")
const { getAllProducts , createProduct, updateProduct, deleteProduct } = require("../controller/product.controller")

const router = express.Router()

router.post("/products/new",createProduct)

router.get("/products",getAllProducts)

router.route("/products/:id").put(updateProduct).delete(deleteProduct)

module.exports = router 