import { Box} from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import ProductSlider from './components/ProductSlider';
import Allroutes from './routes/Allroutes';


function App() {
  return (
    <Box  bg="rgb(234,237,237)" className="App">
     <Navbar/>
     <Allroutes/>
     <ProductSlider/>
     

    </Box>
  );
}

export default App;
