import { Box, Button, Divider, Img, Text } from "@chakra-ui/react";
import {AiOutlineGlobal} from "react-icons/ai"
import  "../../Styles/Footer.css"


export default function Footer(){
  
    const handlemoveToTop = () => {
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
    return (
        <>
        <Box textAlign={"center"} bg="white" p="35px 0px">

            <Divider mb="20px"/>
            <Button bg="#ffcc4b" mb="10px" fontSize={13} h={8} w={"200px"}>Sign in</Button>
            <Text fontSize={11} >New Customer? <span style={{color:"skyblue"}}>Start here</span></Text>
            <Divider mt="20px"/>
        </Box>
        <Box onClick={handlemoveToTop}  className="footer_backtotop" >Back to top</Box>
        <Box className="footer_seca"  >
            <Box >
                <Box>
                    <Text>Get To Know Us</Text>
                    <Text>About Us</Text>
                    <Text>Press Releses</Text>
                    <Text>Amazon Science</Text>
                </Box>
                <Box>
                    <Text>Connect with Us</Text>
                    <Text>Facebook</Text>
                    <Text>Twitter</Text>
                    <Text>Instagram</Text>
                </Box>
                <Box>
                    <Text>Make Money with Us</Text>
                    <Text>Sell on Amazon</Text>
                    <Text>Sell under Amazon Accelerator</Text>
                    <Text>Protect and Build Your Brand</Text>
                    <Text>Amazon Global Selling</Text>
                    <Text>Become an Affiliate</Text>
                    <Text>Fulfimment by Amazon</Text>
                    <Text>Advertise Your Products</Text>
                    <Text>Amazon Pay on Merchants</Text>
                </Box>
                <Box>
                    <Text>Let Us Help You</Text>
                    <Text>COVID-19 and Amazon</Text>
                    <Text>Your Account</Text>
                    <Text>Returns Centre</Text>
                    <Text>100% Purchase Protection</Text>
                    <Text>Amazon App Download</Text>
                    <Text>Amazon Assistant Download</Text>
                    <Text>Help</Text>
                </Box>
            </Box>

            
        </Box>

        <Box className="footer_secb">
            <Box>
                <Img  src="logo.png"/>
                <Button leftIcon={<AiOutlineGlobal/>} _hover={{bg:"none"}} variant="outline" borderColor="gray" color={"gray.300"} >English</Button>
            </Box>

         
        </Box>

        <Box className="footer_sebc">
                <Box>India</Box>
                <Box>Australia</Box>
                <Box>Canada </Box>
                <Box>France</Box>
                <Box>Germany</Box>
                <Box>Italy</Box>
                <Box>Japan</Box>
                <Box>Mexico</Box>
                <Box>Netherlands</Box>
                <Box>Poland</Box>
                <Box>Singapore</Box>
                <Box>Spain</Box>
                <Box>Turkey</Box>
                <Box>United Arab Emirates</Box>
                <Box>United Kingdom</Box>
                <Box>United States</Box>
        
            </Box>
        </>
    )
}