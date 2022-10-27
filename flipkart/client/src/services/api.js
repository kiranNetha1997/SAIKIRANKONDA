import axios from "axios";
 const URL ="http://localhost:5000/signup";

export const authenticateSignUp = async(data) =>{
    try{
       await axios.post(URL,data)
    }
    catch(err){
        console.log(err)
    }
};

export const authenticateLogin = async(data) =>{
    try{
  return await axios.post("http://localhost:8000/login",data)
    }
    catch(err){
       console.log(err.response)
       return err.response
    }
}



 //  let respsonse = await axios.post("http://localhost:8000/login",login)
    // let res = await axios.post("http://localhost:8000/login",login);
    // console.log(res)
    // if(res.status === 200){
    //     handleClose()
    //     setAccount(res.data.data.firstname)
    // } else{
    //    setError(true)
    // }