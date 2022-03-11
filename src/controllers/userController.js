const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const createUser = async function (req, res) {

  let data = req.body;
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData });
};



const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });

  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });


  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, data: token });
};



const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);

  if (!userDetails){
    return res.status(400).send({ status: false, msg: "No such user exists" });
  }
  res.status(203).send({ status: true, data: userDetails });
};



const updateUser = async function (req, res) {


  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set : userData } ,{new : true});
  res.status(201).send({ status: "updatedUser", data: updatedUser });
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let ChangeUserProperty = await userModel.findOneAndUpdate( { _id : userId },{$set : {isDeleted : true }})
  res.send({msg :"user deleted Succesfully" , ChangeUserProperty })

}

const postMessage = async function (req, res) {
  let message = req.body.message
  // Check if the token is present

  // let user = await userModel.findById(req.params.userId)
  // if(!user) return res.send({status: false, msg: 'No such user exists'})
  
  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

  //return the updated user document
  return res.send({status: true, data: updatedUser})
}

module.exports.postMessage=postMessage;
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
// module.exports.deleteUser = deleteUser;