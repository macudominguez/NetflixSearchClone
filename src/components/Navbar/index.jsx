import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";

import NetflixAvatar from "../../assets/NetflixAvatar.png";
import NetflixLogo from "../../assets/NetFlixLogo.png";

const Links = [
  "Inicio",
  "Series",
  "Películas",
  "Novedades Populares",
  "Mi Lista",
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Navbar = ({ setSearch }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} zIndex="2" w="100%" bg="black" color="white">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link>
              <Image
                boxSize="115px"
                objectFit="contain"
                src={NetflixLogo}
                alt="Netflix Logo"
                ml="30px"
              />
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {/* <IconButton
              aria-label="Search database"
              _hover={{
                textDecoration: "none",
              }}
              icon={
                isOpen ? ( */}
            <Input
              placeholder="Titulos..."
              type="text"
              w="50%"
              mr="10px"
              onChange={(event) => setSearch(event.target.value)}
            />
            {/* ) : ( */}
            {/* <SearchIcon />
                )
              }
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color="white"
              mr="5px"
            /> */}
            <Link
              mr="15px"
              fontSize="15px"
              _hover={{
                textDecoration: "none",
              }}
            >
              Niños
            </Link>
            <Link>
              <FaBell />
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                {/* <Avatar src={NetflixAvatar} /> */}
                <Link>
                  <Image
                    boxSize="30px"
                    objectFit="contain"
                    alt="Netflix Logo"
                    ml="30px"
                    src={NetflixAvatar}
                  />
                </Link>
              </MenuButton>
              <MenuList color="white" bg="fff" border="1px black">
                <MenuItem>
                  <Image
                    boxSize="22px"
                    objectFit="contain"
                    alt="Netflix Logo"
                    mr="14px"
                    src={NetflixAvatar}
                  />
                  Usuario{" "}
                </MenuItem>
                <MenuItem>
                  <Box mr="15px">
                    <TiPencil size="20px" />
                  </Box>
                  Administrar Perfiles
                </MenuItem>
                <MenuItem>
                  <Box mr="15px">
                    <AiOutlineUser size="20px" />
                  </Box>
                  Cuenta
                </MenuItem>
                <MenuItem>
                  <Box mr="15px">
                    <BsQuestionCircle size="20px" />
                  </Box>
                  Centro de ayuda
                </MenuItem>
                <MenuItem>Cerrar sesión en Netflix</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
