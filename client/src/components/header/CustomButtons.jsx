import { useState ,useContext} from "react";
import Profile from "./profile.jsx";
import { Link } from "react-router-dom";
import { Box ,Button,styled,Badge, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DataContext } from "../../context/DataProvider";
//components
import { useSelector } from "react-redux";
import LoginDialog from "../login/LoginDialog";
const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'block',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));
const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));
const LoginButton=styled(Button)`
color:#2874f0;
Background:#fff;
text-tranform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;
`
const CustomButtons=()=>{
    const [open,setopen]=useState(false);

    const {account,setAccount}= useContext(DataContext)
    const {cartItems}=useSelector(state=> state.cart);
    const openDialog=()=>{
        setopen(true);
    }
    return (
     <Wrapper>
        {
            account ? <Profile account={account}  setAccount={setAccount}/>  :
            <LoginButton variant="contained" onClick={openDialog}>login</LoginButton>

        }
        <Typography style={{marginTop:'3px',width:'135px'}}>Become a seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>
        <Container to="/cart">
            <Badge BadgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon/>
            </Badge>
            <Typography style={{marginLeft:10}}>Cart</Typography>
        </Container>
        <LoginDialog open={open} setopen={setopen}/>
     </Wrapper>
    );
}

export default CustomButtons