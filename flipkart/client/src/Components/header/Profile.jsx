import React,{useState} from 'react';
import { Typography,Box,styled} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';


const Component =styled(Menu)`
 margin-top:20px
`;

const Logout = styled(Typography)`
        font-size:14px;
        margin-left:7px
   `;

function Profile({account,setAccount}) {
    const [open,setOpen] = useState(false);
    const handleClick =(event) =>{
        setOpen(event.currentTarget)
    }

  
    const handleClose =() =>{
          setOpen(false)
    }
    const LogOutUser =() =>{
        setAccount('');
    }
   
  return (
    <>
    <Box onClick={handleClick} >
        <Typography style={{marginTop:2}} >{account}</Typography>
    </Box>
    <Component
        id="basic-menu"
        anchorEl={open}
        open={open}
        onClose={handleClose}
       
      >
        <MenuItem onClick={() => {handleClose();LogOutUser()}}>
            <LogoutIcon color='primary'/>
            <Logout>LogOut</Logout>
        </MenuItem>
             
      </Component>
    </>
  )
}

export default Profile;