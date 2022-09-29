const jwt = require('jsonwebtoken');


module.exports = function(req, res, next) {
    try{
      let token = req.header('x-token')
      if(!token){
        res.status(400).send("token not found")
      }
      let decode = jwt.verify(token,'jwtSecret');
      req.user = decode.user;
      next();
    }
    catch(err){
        res.status(400).send("auth error")

    }
}