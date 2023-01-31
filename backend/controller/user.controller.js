const userModel = require("../models/user.model")
const argon2 = require('argon2');

// register user 
const registeruser = async (req, res) => {
 try{
  let {username, email, password} = req.body

   let existing_user = await userModel.find({email}) 
   if(existing_user.length !== 0) return  res.send("user already exists ")
    
   password = await argon2.hash(password);
   let newuser = await userModel.create({username, email, password})
   res.status(201).send(newuser)

 }catch(err){
  console.log(err)
}

    
}


// login user 

const loginuser = async (req, res) => {
    try{
     let {email, password} = req.body
     let user = await  userModel.findOne({email})
     if(user.length == 0) res.send("No such email exists") 

     if (await argon2.verify( user.password, password))  res.status(200).send(true)
     else res.send("Wrong password")
     
    }catch(err){
      console.log(err)
    }
}

module.exports = {registeruser , loginuser}