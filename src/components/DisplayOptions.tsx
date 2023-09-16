import { HStack, IconButton, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { BsFillGridFill, BsViewStacked } from "react-icons/bs";

interface Props {
  children: ReactNode;
}

const DisplayOptions = () => {
  const [viewMode, setViewMode] = useState<"grid" | "stacked">("grid");

  const handleGridViewClick = () => {
    setViewMode("grid");
  };

  const handleStackViewClick = () => {
    setViewMode("stacked");
  };

  return (
    <HStack>
      <Text marginY={3 / 2} fontSize="lg">
        Display options:
      </Text>
      <IconButton
        variant="outline"
        colorScheme="gray"
        aria-label="Grid View"
        fontSize="20px"
        icon={<BsFillGridFill />}
        onClick={handleGridViewClick}
      />
      <IconButton
        variant="outline"
        colorScheme="gray"
        aria-label="Stack View"
        fontSize="20px"
        icon={<BsViewStacked />}
        onClick={handleStackViewClick}
       
      />
      
    </HStack>
  );
};

export default DisplayOptions;