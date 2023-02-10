const mobileModel = require("../models/mobile.model");

// get mobile data
const getMobileData = async (req, res) => {
  try {
    let data = await mobileModel
      .find()
      .skip(req.query.page)
      .limit(req.query.limit);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err.message)
  }
};

// get sorted data
const getsortMobileData = async (req, res) => {
  try {
    let sortby = req.query._sortby;
    let order = req.query._order;
    order = order == "asc" ? 1 : -1;

    var sorted_Data = await mobileModel.find().sort({ [sortby]: order });
    res.send(sorted_Data);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

module.exports = { getMobileData, getsortMobileData };
