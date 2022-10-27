import React,{useState,useContext} from 'react';

import { Box, Typography, Badge, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material'; 
import LoginDail from '../login/LoginDail';
import {DataContext} from "../../context/DataProvider";
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto', 
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    // paddingLight: "100px",
    marginLeft:"30px",
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

const Profilename = styled(Box)(({ theme }) => ({
    color: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '10px 40px',
    // paddingLight: "100px",
    marginLeft:"30px",  
    height: 32,
}));
const CartTypo = styled(Typography)`
    margin-right:200px;
    padding-top:3px;,
 `


const CustomButtons = () => {
    const [open,setOpen] = useState(false);

    const {account,setAccount} =useContext(DataContext);

    const openDialog =() =>{
        setOpen(true);
        
    }

    return (
        <Wrapper>
            {
                account ? <Profilename> <Profile  account={account} setAccount={setAccount}/> </Profilename>:
                <LoginButton onClick={() =>openDialog()} variant="contained">Login</LoginButton>              

            }
            
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>  
                
                <Badge  color="secondary">
                    <ShoppingCart />
                </Badge>
                <CartTypo style={{ marginLeft: -40 }}>Cart</CartTypo>   
                <LoginDail open={open} setOpen={setOpen}/>   
        </Wrapper>
    )
}

export default CustomButtons;