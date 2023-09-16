import { List, ListItem, HStack, Heading, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrls from "../services/Image-urls";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreLists = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <>
      <Heading fontSize="3xl">Genres</Heading>
      <List padding="0">
        {isLoading ? (
          skeletons.map((skeleton) => (
            <GenreListSkeleton key={skeleton} />
          ))
        ) : (
          data.map((genre) => (
            <ListItem key={genre.id} py="5px">
              <HStack>
                <Image
                  borderRadius="8px"
                  boxSize="46px"
                  src={getCroppedImageUrls(genre.image_background)}
                  alt={genre.name}
                />
                <Text pt="10px" fontSize="lg">
                  {genre.name}
                </Text>
              </HStack>
            </ListItem>
          ))
        )}
      </List>
    </>
  );
};

export default GenreLists;
