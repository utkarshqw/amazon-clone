import { Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({page,handlePagination}) => {
  return (
    <>
    <Button
    bg="#f3bd69"
    disabled={page == 0}
    onClick={() => handlePagination(-1)}
  >
    prev
  </Button>
  <Button>{page}</Button>
  <Button
    bg="#f3bd69"
    disabled={page == 1}
    onClick={() => handlePagination(1)}
  >
    next
  </Button>
  </>
  )
}

export default Pagination