import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";

import Allroutes from "./routes/Allroutes";

function App() {
  
  
  return (
    <Box fontSize={40} bg="rgb(234,237,237)" className="App">
      
      <Allroutes />
      
   </Box>
  );
}

export default App;
