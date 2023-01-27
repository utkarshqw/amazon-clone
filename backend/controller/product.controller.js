const Productmodel = require("../models/product.model")

// create product 
const createProduct  = async (req, res) => {
    const product = await Productmodel.create(req.body) 
    res.status(201).json({
        success:true, 
        product
    })
}

// get all products
const getAllProducts = async (req, res ) => {
   
    const products = await Productmodel.find();
    res.status(200).json({
       success:true , 
       products
    })
}

// update product 

const updateProduct = async (req, res) => {

    let product  = await Productmodel.findById(req.params.id) 
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    
   product = await Productmodel.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true,useFindAndModify:false}) 
   res.status(200).json({
    success:true,
    product
   })

}

// delete product 

const deleteProduct = async (req, res) => {
    let product = await Productmodel.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false, 
            message:"Product not found "
        })
    }

    await product.remove() 

    res.status(200).json({
        success:true,
        message:"Product deleted successfully "
    })
}

module.exports = {getAllProducts,createProduct, updateProduct , deleteProduct}