import { Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({page,handlePagination, totalproduct, setPage, limit}) => {
  let total = Math.floor(totalproduct/limit)+1
  
  return (
    <>
    <Button
    bg="#f3bd69"
    
    display={page === 0 && "none"}
    onClick={() => handlePagination(-1)}
  >
    prev
  </Button>
  {
     new Array(total).fill(0).map((elem,index)=>(
       <Button key={index} m="0px 5px" disabled={page === index} bg={page===index && "gray"} onClick={()=>setPage(index)}>{index+1}</Button>
     ))
  }
  <Button
    bg="#f3bd69"
    display={page === total-1 && "none"}
    onClick={() => handlePagination(1)}
  >
    next
  </Button>
  </>
  )
}

export default Pagination