const commentModel = require("../models/comment.model");

const postComment = async (req, res) => {
  // req should have user(ObjectId,required),heading(string),message(string,required),stars(Number),parentId(ObjectId)
  try {
    const newcomment = await commentModel.create(req.body);
    res.send(newcomment);
  } catch (err) {
    res.send(err.message);
  }
};

// getting the comments . comments can be root comment or replies
// if parentId of a comment is null then it is a root comment otherwise it is a reply

// const getRootComment = async (req, res) => {
//   // Id = req.body.id;
//   try {
//     const rootComment = await commentModel
//       .find({ parentId:{$exists:false}})
//       .populate("user", "-password -email -__v");
//     res.status(200).send(rootComment);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).send(err.message);
//   }
// };

// GET ROOT COMMENT

const RootComment = async (req, res) => {
  try {
    const rootcomment = await commentModel
      .find({ parentId: { $exists: false } })
      .populate("user", "-password -email -__v");
    res.status(200).send(rootcomment);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

// GET REPLIES

const getReplies = async (req, res) => {
  try {
    const reply = await commentModel
      .find({ parentId: req.params.parentId })
      .populate("user")
      .populate({
        path: "parentId",
        select:"_id",
        populate: {
          path: "user",
          select: "username  -_id",
        },
      });
    res.status(200).send(reply);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

// DELETE COMMENT OR REPLY

const deletecomment = async (req, res) => {
  try {
    const deleteduser = await commentModel.remove({ _id: req.params.id });
    res.status(200).send(deleteduser);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

module.exports = { postComment, RootComment, deletecomment, getReplies };
