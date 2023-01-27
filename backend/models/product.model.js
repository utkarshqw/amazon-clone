const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating:{type:Number,reqired:true,default:0},
  images: [{ url: { type: String, required: true } }],
  category: { type: String, required: true },
  stock: { type: Number, default: 1 },
  numofReviews: { type: Number, default: 0 },
  reviews: [
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const productmodel = mongoose.model("Product", productSchema);
module.exports = productmodel;
