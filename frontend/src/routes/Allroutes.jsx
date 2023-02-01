import { Text } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../Pages/Authentican/Signin'
import Signup from '../Pages/Authentican/Signup'
import Homepage from '../Pages/Homepage'
import Productpage from '../Pages/Productpage'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/product" element={<Productpage/>} />
        <Route path="*" element={<h1>null</h1>}/>

    </Routes>
  )
}

export default Allroutes