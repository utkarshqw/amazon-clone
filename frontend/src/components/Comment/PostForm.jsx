import { Button, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../../misc/Allfunctions";

const PostForm = ({replytouser}) => {
  const [commentData, setCommentData] = useState({
    heading: "",
    message: "",
    stars: 0,
  });
  const [user, setUser] = useState({});
  const cansubmit =
    commentData.heading && commentData.message && commentData.stars;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const addPost = () => {
    axios
      .post(`http://localhost:8080/comment/post`, {
        ...commentData,
        user: user.id,
      })
      .then((res) => console.log(res.data))
      .then((res) => setCommentData({ heading: "", message: "", stars: 0 }));
  };

  useEffect(() => {
    var token = getCookie("JWT_TOKEN");
    axios
      .get("http://localhost:8080/user/tokeninfo/" + token)
      .then((res) => setUser(res.data));
  }, []);
  return (
    <VStack border="1px solid gray" borderRadius={"5px"} p="10px" w="60%" m="auto">
      <Input
        onChange={handleChange}
        value={commentData.heading}
        name="heading"
        placeholder="heading"
      />
      <Textarea
        onChange={handleChange}
        value={commentData.message}
        name="message"
        placeholder="message"
      />
      <Input
        onChange={handleChange}
        value={commentData.stars}
        name="stars"
        type="number"
        placeholder="stars"
      />
      <Button onClick={addPost} disabled={!cansubmit}>
        Add Review
      </Button>
    </VStack>
  );
};

export default PostForm;
