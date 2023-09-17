import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null
}

const StackedView = ({selectedGenre}: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={1}
        padding="13px"
        spacing={15}
        justifySelf='center'
      >
        {isLoading && skeletons.map(skeleton => 
        <GameCardContainer>
          <GameCardSkeleton key={skeleton}/>
        </GameCardContainer>)}
        {data.map((game) => (

          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );

}

export default StackedView