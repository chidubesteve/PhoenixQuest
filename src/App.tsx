import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import GenreLists from "./components/GenreLists";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import DisplayOptions from "./components/DisplayOptions";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder:  string;
  searchText: string;
}

type Cols = number | { sm: number; md: number; lg: number; xl: number };
const App = () => {
const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)


  const [noOfCols, setNoOfCols] = useState<Cols>({
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  });


  const handleSelectDisplayOption = (cols: Cols) => {
    if (typeof cols === "number") {
      setNoOfCols(cols);
    } else {
      setNoOfCols({ sm: 1, md: 2, lg: 3, xl: 4 });
    }
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav" mb={2}>
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" height="650px" overflowY="scroll">
          <GenreLists
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
          />
        </GridItem>
      </Show>
      <GridItem area="main" >
        <Box px={3}>
          <GameHeading gameQuery={gameQuery}/>
          <HStack justifyContent="space-between" >
            <HStack spacing={5} mb={2} >
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}
              />
            </HStack>
            <Show above="lg">
              <Box mr={2} mb={2}>
                <DisplayOptions
                  onSelectDisplayOption={handleSelectDisplayOption}
                />
              </Box>
            </Show>
          </HStack>
        </Box>
        <GameGrid
          gameQuery={gameQuery}
          columns={noOfCols}
         
        />
      </GridItem>
    </Grid>
  );
};

export default App;
