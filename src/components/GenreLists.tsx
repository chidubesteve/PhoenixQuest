import { List, ListItem, HStack, Heading, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrls from "../services/Image-urls";

const GenreLists = () => {
  const { data } = useGenres();

  return (
    <>
      <Heading fontSize="3xl">Genres</Heading>
      <List  padding='0'>
        {data.map((genre) => (
          <ListItem key={genre.id} py="5px" >
            <HStack >
              <Image
                borderRadius="8px"
                boxSize="46px"
                src={getCroppedImageUrls(genre.image_background)}
                alt={genre.name}
              />
              <Text pt="10px" fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreLists;
