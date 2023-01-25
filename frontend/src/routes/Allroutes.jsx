import { Text } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../components/Authentican/Signin'
import Signup from '../components/Authentican/Signup'
import Homepage from '../Pages/Homepage'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="*" element={<h1>null</h1>}/>

    </Routes>
  )
}

export default Allroutes