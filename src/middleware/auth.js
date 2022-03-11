const jwt =require("jsonwebtoken")

let MDwear=function(req, res,next){
try{
let token = req.headers["x-auth-token"];
    if (!token) {
        return res.status(401).send({ status: false, msg: "token must be present" });
    }

    let decodedToken = jwt.verify(token, "functionup-thorium");
    
    if(decodedToken.userId !== req.params.userId){
        return res.status(401).send( { msg : "you must have to login first" } )
    }
    next()
       
   } catch (error){ res.status(500).send(error) }   
       
}

module.exports.MDwear = MDwear