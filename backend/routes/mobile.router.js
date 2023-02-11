const express = require("express") 
const { getsortMobileData, searchAccessoriesData, getSingleAccessoriesData } = require("../controller/mobile.controller")
const router = express.Router()

// get mobile data.
// router.route("/mobile").get(getMobileData)
// get mobile data sorted by price.
router.route("/mobile_sort").get(getsortMobileData)
router.route("/accessories_search").get(searchAccessoriesData)

// get data of single product 
router.route("/details/:id").get(getSingleAccessoriesData)


module.exports = router