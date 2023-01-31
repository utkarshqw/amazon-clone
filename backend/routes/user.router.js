const express = require("express") 
const { registeruser, loginuser } = require("../controller/user.controller")
const router = express.Router()

router.route("/registeruser").post(registeruser)
router.route("/login").post(loginuser)

module.exports = router 