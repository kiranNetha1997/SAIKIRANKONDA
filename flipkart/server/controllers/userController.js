import User from "../model/usersSchema.js";


export const userSignUp =async (req,res) =>{
      try{
       
     const exist =  await User.findOne({username:req.body.username});
        if(exist){
            return res.status(401).send("UserName Already exist")
        }
        const email = await User.findOne({email:req.body.email});
        if(email){
            return res.status(401).send("Email Already Exist")
        }

        const user = req.body;
        const newUser = new User(user)
        await newUser.save();
        return res.status(200).send(user);
      }
      catch(err){
        res.status(400).send(err)
      }
}

export const userLogin =async(req,res) =>{
  try{
        const username = req.body.username;
        const password = req.body.password;

        let user = await User.findOne({username:username, password:password})
        if(user){
          res.status(200).send({data:user})
        } else{
          res.status(401).send("Invalid Credentials")
        }
  }
  catch(err){
    res.status(401).send(err.message)
  }
};

