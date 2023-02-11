<Box  bg="white" m="10px 0px" className={styles.Productcard_container}>
<Box
  p="10px"
  maxW="230px"
  minW="230px"
  align="center"
  bg="rgba(128, 128, 128, .15)"
>
  <Img src={mainimg} h="100%" />
</Box>
<Box p="10px">
  <Text noOfLines={2} mb="5px" fontSize={18}>
    {heading}
  </Text>


  <ProductStar star={star} />

 <Flex alignItems={"flex-end"} gap="10px" w="300px">
    <Text fontSize={30}>{`₹ ${price.toLocaleString()}`}</Text>
    <Flex pb="6px" gap={"5px"}>
      <Text color={"gray"} textDecor="line-through">
        ₹{base}
      </Text>
      <Text>({`${discount}% off`})</Text>
    </Flex>
  </Flex>
  <Text fontSize={14} fontWeight={600}>
    Free Delivery by Amazon
  </Text>
</Box>
</Box>