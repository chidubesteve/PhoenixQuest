import { Box, HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" >
      <Image src={logo} boxSize="60px" />
      <HStack justifyContent="space-between">
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
