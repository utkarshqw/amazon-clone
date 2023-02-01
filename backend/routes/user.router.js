const express = require("express") 
const { registeruser, loginuser, getuser } = require("../controller/user.controller")
const router = express.Router()


router.route("/registeruser").post(registeruser)
router.route("/login").post(loginuser)
router.route("/individual").get(getuser)
module.exports = router 