const express = require("express") 
const { getsortMobileData, searchAccessoriesData } = require("../controller/mobile.controller")
const router = express.Router()

// get mobile data.
// router.route("/mobile").get(getMobileData)
// get mobile data sorted by price.
router.route("/mobile_sort").get(getsortMobileData)
router.route("/accessories_search").get(searchAccessoriesData)


module.exports = router