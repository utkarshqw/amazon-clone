import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReplyForm from "./ReplyForm";
import ProdctStar from "../product/ProdctStar";
import LikeDislike from "./LikeDislike";
import {AiFillCaretDown} from "react-icons/ai"

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
        border="1px solid white"
        mt="10px"
        ml={parentId ? "20px" : "5px"}
        p="5px"
      >
        <Box p="10px" border="1px solid #f3bd69" borderRadius={"5px"}>
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

          <Text>
            {" "}
            {parentId && (
              <span
                style={{
                  color: "#0a66c2",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                @{parentId.user.username}
              </span>
            )}{" "}
            {message}
          </Text>
          {/* compoent which contains like dislike and show replies button */}
          <LikeDislike
            show={show}
            setShow={setShow}
            handleDelete={handleDelete}
          />
        </Box>
        {replies.length !== 0 && (
          <Button
            color="#fb9236"
            rightIcon={<AiFillCaretDown />}
            // fontSize={"14px"}
            size="sm"
            variant="ghost"
            onClick={() => setShowreply(!showreply)}
          >
            show replies
          </Button>
        )}

        {show && <ReplyForm setShow={setShow} parentId={_id} />}
      </Box>

      {showreply &&
        replies.map((elem, index) => (
          <CommentCard showreply={true} key={index} {...elem} />
        ))}
    </>
  );
};

export default CommentCard;
