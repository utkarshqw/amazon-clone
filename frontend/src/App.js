import { Box, Button } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/homepage/Navbar";
import Allroutes from "./routes/Allroutes";

function App() {
  
  return (
    <Box bg="rgb(234,237,237)" className="App">
      <Navbar />
      <Allroutes />
   </Box>
  );
}

export default App;
