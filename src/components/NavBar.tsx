import { Box, HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import DisplayOptions from "./DisplayOptions";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" >
      <Image src={logo} boxSize="60px" />
      <HStack justifyContent="space-between">
        <Show above= 'lg'>
          <Box mr={5}>
            <DisplayOptions />
          </Box>
        </Show>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
