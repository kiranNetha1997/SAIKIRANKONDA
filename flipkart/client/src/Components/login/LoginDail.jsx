import React ,{useState,useContext}from 'react';
import {Dialog,Box, TextField, Typography, Button,styled,DialogContent} from "@mui/material";
import {authenticateLogin} from "../../services/api";
import axios from "axios";
import {DataContext} from "../../context/DataProvider";


const Component = styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

// const Error = styled(Typography)`
//     font-size: 10px;
//     color: #ff6161;
//     line-height: 0;
//     margin-top: 10px;
//     font-weight: 600;
// `
// // height: 70vh;
    
const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 28%;
    height: 82.7%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;
 const Error = styled(Typography)`
   font-size:10px;
   color:#ff6161;
   line-height:0;
   margin-top:10px;
   fint-weight:600;
 `

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
};


    const signUpIntialValues ={
        firstname:"",
        lastname:"",
        username:"",
        email:"",
        password:"",
        phone:""
    };

 const loginIntialValues = {
    username :"",
    password : ""
 };


function LoginDail({open,setOpen}) {
    const[account,toggleAccount] = useState(accountInitialValues.login);
    const [signup,setSignUp] = useState(signUpIntialValues);
    const [login,setLogin] = useState(loginIntialValues);
    const[err,setError] = useState(false);
    // console.log(err);
    
    const {setAccount} = useContext(DataContext);

    const handleClose =() =>{
           setOpen(false)
           setError(false)
    };

    const toggleSignup =() =>{
        toggleAccount(accountInitialValues.signup)
    };

    const onInputChange =(e) =>{
        setSignUp({...signup,[e.target.name]:e.target.value})
     };

     const signUpUser =async() =>{
    let resSingUp = await axios.post("http://localhost:8000/signup",signup);
        console.log(resSingUp)
       handleClose();
       setAccount(signup.firstname);      
     };

  const onValueChange =(e) =>{
         setLogin({...login, [e.target.name]: e.target.value})
  };

  const loginUser =async(data) =>{
      let response = await authenticateLogin(login)
    //   console.log(response);   
    if(response.status === 200){
        handleClose();
        setAccount(response.data.data.firstname)
    }  else{
        setError(true)
    }
        
  };
  

  return (
    <Dialog open={open}  PaperProps={{sx:{maxWidth:'unset'}}}>
              <LoginButton  onClick={handleClose} >Close</LoginButton>
         <Component>
            <Box style={{display:'flex', height:'100%'}}>
            <Image>
                <Typography variant='h5'>
                      {account.heading}
                </Typography>
                <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
            </Image>
              {
                account.view ==='login' ? 
              
            <Wrapper>
                <TextField variant="standard" label="Enter Username/Email/Mobile" name='username' onChange={(e) =>onValueChange(e)}/>
                {
                    err &&
                   <Error>Invalid Credentials</Error>

                }
                <TextField variant="standard" label="Enter Password" name='password' onChange={(e) =>onValueChange(e)}/>
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                <LoginButton onClick={loginUser}>LogIn</LoginButton>
                <Typography style={{textAlign:"center"}}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>

            </Wrapper>
            :
            <Wrapper>
            <TextField variant="standard" label="Enter Firstname" name='firstname' onChange={(e) =>onInputChange(e)}/>
            <TextField variant="standard" label="Enter Lastname" name='lastname'  onChange={(e) =>onInputChange(e)}/>
            <TextField variant="standard" label="Enter Username" name='username'  onChange={(e) =>onInputChange(e)}/>
            <TextField variant="standard" label="Enter Emial"  name='email' onChange={(e) =>onInputChange(e)}/>
            <TextField variant="standard" label="Enter Password" name='password'  onChange={(e) =>onInputChange(e)}/>
            <TextField variant="standard" label="Enter Phone" name='phone'  onChange={(e) =>onInputChange(e)}/>
            <LoginButton onClick={signUpUser}>Continue</LoginButton>
           
        </Wrapper>
}
            </Box>
         </Component>
    </Dialog>
   )
}
export default LoginDail;