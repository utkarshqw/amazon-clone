import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CommentCard from './CommentCard'
import PostForm from './PostForm'


const CommentSection = () => {
 const [rootcomment, setRootComment] = useState([])
 
  useEffect(()=>{
   axios.post("http://localhost:8080/comment/getrootcomment",{id:"null"})
  .then(res=>setRootComment(res.data))
  },[])

  return (
    <Box 
    display={"flex"}
    gap="20px"
    bg="white"

    >
         {/* rating bar container */}
         <Box h="500px" border="1px solid gray" w="25%"></Box>

         {/* comment bar container */}
         <Box h="auto" border="1px" w="75%">
          <PostForm />

          {
            rootcomment.map((elem,index)=>(
              <CommentCard key={index} {...elem} />
            ))
          }
        
         </Box>
    </Box>
  )
}

export default CommentSection