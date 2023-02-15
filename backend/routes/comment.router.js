const express = require("express") 
const { postComment, getRootComment } = require("../controller/comment.controller")
const router = express.Router()

router.route("/post").post(postComment)
router.route("/getrootcomment").get(getRootComment) 

module.exports = router