const express = require("express") 
const { getMobileData } = require("../controller/mobile.controller")
const router = express.Router()

// get mobile data
router.route("/mobile").get(getMobileData)
router.route("/mobile_sort").get()


module.exports = router