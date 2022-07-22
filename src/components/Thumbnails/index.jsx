import { Flex, Heading } from "@chakra-ui/react";

import Card from "../Card";

const Thumbnails = ({ title, array }) => {
  return (
    <Flex direction="column">
      <Heading color="white" mt="20px">
        {title}
      </Heading>
      <Flex direction="row" gap="30px" wrap="wrap">
        {array &&
          array.slice(0, 9).map((item) => {
            return <Card key={`card-${item.title}}`} item={item} />;
          })}
      </Flex>
    </Flex>
  );
};

export default Thumbnails;
