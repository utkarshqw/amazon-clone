import { Box, Button } from '@chakra-ui/react';
import './App.css';
import Hero from './components/Hero';
import ProductSlider from './components/ProductSlider';
import Allroutes from './routes/Allroutes';


function App() {
  return (
    <Box className="App">
     <Allroutes/>
     <ProductSlider/>
     <Hero/>

    </Box>
  );
}

export default App;
