const express = require("express") 
const { getMobileData } = require("../controller/mobile.controller")
const router = express.Router()

// get mobile data
router.route("/mobile").get(getMobileData)


module.exports = router