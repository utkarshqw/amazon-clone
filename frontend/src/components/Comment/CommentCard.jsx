import { Box, Button, Flex, Img, Text} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PostForm from "./PostForm";
import ReplyForm from "./ReplyForm";
import ProdctStar from "../product/ProdctStar";

const CommentCard = ({
  _id,
  parentId,
  date,
  user,
  heading,
  stars,
  message,
}) => {
  const [show, setShow] = useState(false);
  const [showreply, setShowreply] = useState(false);
  const [replies, setreplies] = useState([]);

  const handleDelete = () => {
    axios
      .delete("http://localhost:8080/comment/deletecomment/" + _id)
      .then((res) => alert("deleted"));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/comment/replies/" + _id)
      .then((res) => setreplies(res.data));
  }, [replies]);

  return (
    <>
      <Box
      
      border="1px" mt="10px" ml={ parentId ?"20px": "5px"} p="5px">
        <Flex alignItems={"center"}>
          <Img w="60px" src={"/" + user.userpicture} />
          <Text color="gray" fontSize="14px">
            {user.username}
          </Text>
        </Flex>

        <Flex gap="10px" alignItems="center">
          {stars && <ProdctStar star={stars} />}
          {heading && (
            <Text fontWeight={"bold"} fontSize={"15px"}>
              {heading}
            </Text>
          )}
        </Flex>

        <Text>{date}</Text>
        <Text>
          {" "}
          {parentId && (
            <span
              style={{ color: "#0a66c2", fontSize: "14px", fontWeight: "bold" }}
            >
              {" "}
              @{parentId.user.username}
            </span>
          )}{" "}
          {message}
        </Text>

        <Button onClick={() => setShow(!show)}>reply</Button>
        <Button onClick={handleDelete}>Delete comment</Button>
       {replies.length !==0 && <Button onClick={() => setShowreply(!showreply)}>show replies</Button> }

        {show && <ReplyForm setShow={setShow} parentId={_id} />}
      </Box>

      {showreply &&
        replies.map((elem, index) => <CommentCard showreply={true} key={index} {...elem} />)}
    </>
  );
};

export default CommentCard;
