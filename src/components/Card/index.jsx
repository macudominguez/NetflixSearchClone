import { useState } from "react";

import { Box, Text, Image } from "@chakra-ui/react";

const Card = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image src={item.image} w="150px" h="200px" my="20px" />

      {isHover && <Text>{item.title}</Text>}
    </Box>
  );
};
export default Card;
