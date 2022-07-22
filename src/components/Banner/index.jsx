import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BiInfoCircle } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";

import strangerThings from "../../assets/strangerthings.jpg";

export default function WithBackgroundImage() {
  return (
    <Flex
      h={"75vh"}
      backgroundImage={strangerThings}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} justifyContent="flex-start" spacing={6} mr="60%">
          <Text
            color={"#ffffff"}
            fontWeight={700}
            fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
          >
            STRANGER THINGS
          </Text>
          <Text color="white" fontWeight="bold">
            Después de la extraña desaparición de un niño , un pueblo se
            encuentra ante un misterio que revela experimentos secretos ,fuerzas
            sobrenaturales y a una niña muy especial.
          </Text>
          <Stack direction={"row"}>
            <Button bg={"#ffffff"} _hover={{ bg: "grey" }} color="black">
              <BsFillPlayFill size="30px" /> Reproducir
            </Button>
            <Button
              bg={"#565253"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              <BiInfoCircle size="30px" /> Más Información
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
