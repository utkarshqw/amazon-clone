const commentModel = require("../models/comment.model");

const postComment = async (req, res) => {
  try {
    const newcomment = await commentModel.create(req.body);
    res.send(newcomment);
  } catch (err) {
    res.send(err.message);
  }
};

// getting the comments . comments can be root comment or replies
// if parentId of a comment is null then it is a root comment otherwise it is a reply

const getRootComment = async (req, res) => {
    Id = req.body.id? req.body.id: "null"
  try {
    const rootComment = await commentModel
      .find({ parentId: Id })
      .populate("user","-password -email -__v");
    res.status(200).send(rootComment);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { postComment, getRootComment };
