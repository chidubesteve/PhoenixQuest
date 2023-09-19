import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
 gameQuery: GameQuery
  columns?: number | { sm: number; md: number; lg: number; xl: number };
}

const GameGrid = ({gameQuery, columns}: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <Text color='red'>{error}</Text>}

      <SimpleGrid
        columns={columns}
        padding="10px"
        spacing={6}

      >
        {isLoading && skeletons.map(skeleton => 
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer>)}
        {data.map((game) => (

          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
