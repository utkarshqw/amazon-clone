import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "../../Styles/Navbar.module.css";
import axios from "axios"
import SearchResult from "./SearchResult";

const SearchBar = ({searchResult, setSearchResult}) => {
   
    

    const SEARCH_URL = `http://localhost:8080/product/accessories_search/?search=`
  const handleChange = (e) => {
   if(e.target.value.length < 2) return  setSearchResult([])
   axios.get(SEARCH_URL + e.target.value).then((res)=>{console.log(res.data);setSearchResult(res.data)})
  };

  return (
    <Box w="45%" pos={"relative"}>
      <InputGroup>
        <Input
          className={styles.nav_input}
          borderRadius="2px"
          bg="white"
          fontSize={13}
          fontWeight={600}
          placeholder="Serch product..."
          onChange={handleChange}
        />
        <InputRightElement
          className={styles.nav_right}
          children={<BsSearch size={"1.5em"} color="black" />}
        />
      </InputGroup>

      <Box
        pos="absolute"
        top="105%"
        boxShadow={ 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
        borderRadius={"2px"}
        w="100%"
        h={"auto"}
        bg="white"
        maxH="400px"
        overflowY={"scroll"}
        p="15px"
        display={searchResult.length == 0  && "none"}
      >
        {
            searchResult?.map((elem,i)=>(
                <SearchResult key={i} {...elem} />
            ))
        }

      </Box>
    </Box>
  );
};

export default SearchBar;
