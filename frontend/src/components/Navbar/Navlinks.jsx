import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../../Styles/Navbar.module.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from 'react-router-dom'
const Navlinks = () => {
  return (
    <Box className={styles.navlink_container}>
      <Flex>
      <GiHamburgerMenu/>
      <Text>All</Text>
     </Flex>

     <Link to="/product" className={styles.linkname}>Mobiles</Link>
     <Link className={styles.linkname}>Fashion</Link>
     <Link className={styles.linkname}>Electronics</Link>
     <Link className={styles.linkname}>Appliances</Link>
     <Link className={styles.linkname}>Travel</Link>
     <Link className={styles.linkname}>Top offers</Link>
     <Link className={styles.linkname}>New Release</Link>
     <Link className={styles.linkname}>Toys</Link>
     <Link className={styles.linkname}>Prime</Link>
     <Link className={styles.linkname}>Customer Service</Link>



    </Box>
  )
}

export default Navlinks