import { Box, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import PostForm from './PostForm'
import ReplyForm from './ReplyForm'

const CommentCard = ({ date, user,heading,  message}) => {
    const [show, setShow] = useState(false)
  return (
    <Box border="1px" m="5px" p="5px">
        <Text></Text>
        <Text>{date}</Text>
        <Text>{heading}</Text>
        <Text>{message}</Text>
        <Text>{user.username}</Text>
        <Text>{user._id}</Text>
        <Button onClick={()=>setShow(!show)} >reply</Button>
        
       { show &&  <ReplyForm setShow={setShow} parentId={user._id} /> }
        
    
    </Box>
  )
}

export default CommentCard