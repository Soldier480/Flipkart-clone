import { useState,useEffect} from 'react';
import {Box,InputBase,styled,List,ListItem} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch } from 'react-redux';
import {  getProducts as listProducts} from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer=styled(Box)`
Background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const SearchInputBase=styled(InputBase)`
padding-left:20px;
width:100%;
`
const SearchIconWrapper=styled(Box)`
color:blue;
padding:5px;
display:flex
`
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;



const Search=()=>{

    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <SearchContainer>
        <SearchInputBase
          placeholder="Search for products, brands and more"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => getText(e.target.value)}
        />
          
            <SearchIconWrapper>
            <SearchIcon/>
            </SearchIconWrapper>
            {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
        </SearchContainer>
    );
}

export default Search