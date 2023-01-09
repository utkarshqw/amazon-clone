import { Box, Img } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/HeroSlider.module.css" 

const HeroSlider = () => {
  return (
    <>
    <Box className={styles.slider}>
        <Box className={styles.slides}>
            
            {/* radio button start */}
           
            <input type="radio" name="radio-btn" id={styles.radio1} />
            <input type="radio" name="radio-btn" id={styles.radio2} />
            <input type="radio" name="radio-btn" id={styles.radio3} />
            <input type="radio" name="radio-btn" id={styles.radio4} />
       
            {/* <input type="radio" name="radio-btn" id={styles[radio6]} /> */}
           

            {/* slide images start */}
            <Box className={`${styles.slide} ${styles.first}`}>
                <img src="slider1.jpg" />
            </Box>
            <Box className={styles.slide}>
                <img src="slider2.jpg" />
            </Box>
            <Box className={styles.slide}>
                <img src="slider3.jpg" />
            </Box>
            <Box className={styles.slide}>
                <img src="slider4.jpg" />
            </Box>

            {/* automatic navigation starts */}

            <Box className={styles.navigationauto}>
                <Box className={styles.autobtn1}></Box>
                <Box className={styles.autobtn2}></Box>
                <Box className={styles.autobtn3}></Box>
                <Box className={styles.autobtn4}></Box>

            </Box>

            {/* manual navigation start */}
            <Box className={styles.navigationmanual}>
             <label htmlFor="radio1" className={ styles.manualbtn}></label>
             <label htmlFor="radio2" className={ styles.manualbtn}></label>
             <label htmlFor="radio3" className={ styles.manualbtn}></label>
             <label htmlFor="radio4" className={ styles.manualbtn}></label>
            </Box>

        </Box>
       
    </Box>
    </>
  )
}

export default HeroSlider