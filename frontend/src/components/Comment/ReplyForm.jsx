import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../../misc/Allfunctions";

const ReplyForm = ({ parentId , setShow }) => {
  const [user, setUser] = useState({});
  const [reply, setReply] = useState("");
  const handleReply = () => {
     axios.post("http://localhost:8080/comment/post", {
       user: user.id,
       message: reply,
       parentId,
     }).then(res=> setReply(""))
     .then((res)=>setShow(false))
       
    
  };

  useEffect(() => {
    var token = getCookie("JWT_TOKEN");
    axios
      .get("http://localhost:8080/user/tokeninfo/" + token)
      .then((res) => setUser(res.data))
      .then(res=> setReply(""))
  }, []);
  return (
    <Box>
      <Textarea value={reply} onChange={(e) => setReply(e.target.value)} />
      <Button onClick={handleReply} >Comment</Button>
    </Box>
  );
};

export default ReplyForm;
