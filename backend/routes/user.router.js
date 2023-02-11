const express = require("express") 
const { registeruser, loginuser, getuser, getUserDetailsJwt } = require("../controller/user.controller")
const router = express.Router()


router.route("/registeruser").post(registeruser)
router.route("/login").post(loginuser)
router.route("/individual").get(getuser)
router.route("/tokeninfo/:token").get(getUserDetailsJwt)
module.exports = router 