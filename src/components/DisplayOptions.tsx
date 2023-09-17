import { HStack, IconButton, Text } from "@chakra-ui/react";
import { BsFillGridFill, BsViewStacked } from "react-icons/bs";

interface Props {
  onSelectDisplayOption: (cols: number | { sm: number; md: number; lg: number; xl: number }) => void;
}


const DisplayOptions = ({onSelectDisplayOption}: Props) => {


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
        onClick={() => onSelectDisplayOption({ sm: 1, md: 2, lg: 3, xl: 4 })}
      />
      <IconButton
        variant="outline"
        colorScheme="gray"
        aria-label="Stack View"
        fontSize="20px"
        icon={<BsViewStacked />}
        onClick={() => onSelectDisplayOption(1)}
       
      />
      
    </HStack>
  );
};

export default DisplayOptions;