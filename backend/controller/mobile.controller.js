const mobileModel = require("../models/mobile.model");

// get Mobile  data
const getsortMobileData = async (req, res) => {
  try {
    let sortby = req.query._sortby;
    let order = req.query._order;
    let limit = req.query._limit;
    let page = req.query._page;

    let total_product = await mobileModel.count();

    if (order == "asc") order = 1;
    else if (order == "desc") order = -1;
    else {
      let Data = await mobileModel.find().limit(+limit).skip(page);
      return res.status(200).send({ Data, total_product });
    }

    var sorted_Data = await mobileModel
      .find()
      .sort({ [sortby]: order })
      .limit(+limit)
      .skip(page);
    res.status(200).send({ sorted_Data, total_product });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

// search mobile data

const searchAccessoriesData = async (req, res) => {
  try {
    let str = req.query.search;
    // if(str.length <2) return res.send([])

    let search_Result = await mobileModel.find({
      heading: { $regex: str, $options: "$i" },
    });
    res.status(200).send(search_Result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getsortMobileData, searchAccessoriesData };
