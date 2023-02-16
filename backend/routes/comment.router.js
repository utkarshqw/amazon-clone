const express = require("express") 
const { postComment, RootComment, deletecomment, getReplies } = require("../controller/comment.controller")
const router = express.Router()

router.route("/post").post(postComment)
router.route("/rootcomment").get(RootComment) 
router.route("/replies/:parentId").get(getReplies)
router.route("/deletecomment/:id").delete(deletecomment)

module.exports = router