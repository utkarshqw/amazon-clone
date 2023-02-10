const express = require("express") 
const { getMobileData, getsortMobileData } = require("../controller/mobile.controller")
const router = express.Router()

// get mobile data.
router.route("/mobile").get(getMobileData)
// get mobile data sorted by price.
router.route("/mobile_sort").get(getsortMobileData)


module.exports = router