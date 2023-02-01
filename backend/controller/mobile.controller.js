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
  }
};

// get sorted data 
const getsortMobileData = async (req, res) => {

    try{
        

    }catch(err){

    }
}

module.exports = { getMobileData };
