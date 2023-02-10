import { Button, Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { MdViewAgenda } from "react-icons/md";
import {FaSortAmountDownAlt} from "react-icons/fa";
import {FaSortAmountUp} from "react-icons/fa";
import {TiArrowUnsorted} from "react-icons/ti";
import Tool from "./Tool";

const TopBar = ({ setGrid, setOrder, order, grid }) => {

  return (
    <Flex
      gap={5}
      borderBottom={"1px"}
      borderColor="gray.300"
      h="50px"
      alignItems={"center"}
    >
      <Tool state={order} condition={"unSorted"}  label="Unsorted" update="unSorted" setState={setOrder} icon={<TiArrowUnsorted/>} />
      <Tool state={order} condition={"asc"}  label="Price Low To High" update="asc" setState={setOrder} icon={<FaSortAmountDownAlt/>} />
      <Tool state={order} condition={"desc"}  label="Price High To Low" update="desc" setState={setOrder} icon={<FaSortAmountUp/>} />
      <Tool state={grid}  condition={true} label = "Grid view" update={true} setState={setGrid} icon={<BsFillGridFill/>} />
      <Tool state={grid}  condition={false} label="Column view" update={false} setState={setGrid} icon={<MdViewAgenda/>} />

    </Flex>
  );
};

export default TopBar;
