import { Flex } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const ProdctStar = ({ star }) => {
  const fullStar = new Array(star)
    .fill(0)
    .map((elem, index) => <AiFillStar key={index} color="orange" />);

  const emptyStar = new Array(5 - star)
    .fill(0)
    .map((elem, index) => <AiOutlineStar key={index} color="orange" />);

  return (
    <Flex>
      {fullStar}
      {emptyStar}
    </Flex>
  );
};

export default ProdctStar;
