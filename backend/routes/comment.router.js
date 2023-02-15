const express = require("express") 
const { postComment, getRootComment } = require("../controller/comment.controller")
const router = express.Router()

router.route("/post").post(postComment)
router.route("/getrootcomment").post(getRootComment) 

module.exports = router