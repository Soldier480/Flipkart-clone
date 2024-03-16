import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material';
import { useState } from 'react';
import Search from './Search.jsx'
import CustomButtons from './CustomButtons.jsx'
import {AppBar ,Typography,styled,Box,List,ListItem,Drawer,IconButton,Toolbar} from "@mui/material"

const HeaderStyle=styled(AppBar)`
 Background:#2874f0;
 height:55px;
`
 const Component=styled(Link)`
 margin-left:12%;
 line-height:0;
 text-decoration:none;
 color:inherit;
`
const Subheading=styled(Typography)`
font-size:10px;
font-style:italic;
`
const Plusimage=styled('img')({
  width:10,
  height:10,
  marginLeft:10
})
const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
  margin: '0 5% 0 auto', 
  [theme.breakpoints.down('sm')]: {
      display: 'none'
  }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const Header=()=> {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false);

  const HandleClose = () => {
      setOpen(false);
  }

  const HandleOpen = () => {
      setOpen(true);
  }

  const list = () => (
    <Box style={{ width: 250 }} onClick={HandleClose}>
        <List>
            <listItem button>
                <CustomButtons />
            </listItem>
        </List>
    </Box>
);

  return (
    <HeaderStyle>
        <Toolbar style={{minHeight:55}}>
        <MenuButton
                    color="inherit"
                    onClick={HandleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={HandleClose}>
                    {list()}
                </Drawer>
         <Component to='/'>
            <img src={logoURL} alt="Flipkart logo" style={{width:75}}></img>
            <Box style={{display:'flex'}}>
            <Subheading>Explore&nbsp;
            <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
            </Subheading>   
            <Plusimage src={subURL} alt='sublogo'></Plusimage>   
            </Box>
            </Component> 
            <Search/>  
            <CustomButtonWrapper>
              <CustomButtons/>
            </CustomButtonWrapper>
        </Toolbar>
    </HeaderStyle>
  )
}

export default Header