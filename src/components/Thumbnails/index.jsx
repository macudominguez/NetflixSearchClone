import { Flex, Heading } from "@chakra-ui/react";

import Card from "../Card";

const Thumbnails = ({ title, array }) => {
  return (
    <Flex direction="column">
      <Heading color="white" mt="20px" ml="10px">
        {title}
      </Heading>
      <Flex direction="row" wrap="wrap" justifyContent="space-around">
        {array &&
          array.slice(0, 8).map((item) => {
            return <Card key={`card-${item.title}}`} item={item} />;
          })}
      </Flex>
    </Flex>
  );
};

export default Thumbnails;
