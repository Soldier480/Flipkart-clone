import { Fragment,useEffect } from 'react';
import NavBar from './NavBar.jsx'
import Banner from './Banner.jsx'
import { Box ,styled} from '@mui/material';
import { getProducts } from '../../redux/actions/productActions.js';
import { useDispatch ,useSelector} from 'react-redux';
import Slide from './Slide.jsx';
import MidSection from './MidSection.jsx';
import MidSlide from './MidSlide.jsx';

const Container =styled(Box)`
padding : 10px;
background:#F2F2F2;
`



const Home=()=>{

  const {products}  =  useSelector(state => state.getProducts)
    console.log(products);
    
     const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getProducts())
    },[dispatch])
    return(
        <>
     <NavBar/>
     <Container>
     <Banner/>
     </Container>
          <MidSlide
                    products={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <MidSection/>
                <Slide
                    products={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    products={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    products={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
     </>
    );
}
export default Home;