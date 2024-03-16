import React from "react";
import Header from "./components/header/header.jsx"
import Home from './components/Home/Home.jsx'
import {Box} from '@mui/material'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DataProvider from './context/DataProvider.jsx'
import DetailView from "./components/Details/DetailView.jsx";
import Cart from "./components/Cart/Cart.jsx"

function App() {
  return (
    <DataProvider>
      <BrowserRouter> 
       {/* to enable routing in whole application */}
      <Header/>
      <Box style={{marginTop:54}}>
        <Routes>
    <Route path='/' element={ <Home/> } />
     <Route path='product/:id' element={ <DetailView/> } />
     <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
    
  );
}

export default App;
