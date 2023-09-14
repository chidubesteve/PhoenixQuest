import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import DisplayOptions from "./DisplayOptions";

interface NavBarProps {
  toggleViewMode: () => void;
}

const NavBar = () => {

  return (
    <HStack justifyContent="space-between" paddingX="10px">
      <Image src={logo} boxSize="60px" />
      <HStack  justifyContent='space-between'>
        <Box mr={5}>
        <DisplayOptions />
        </Box>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
