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

type Cols = number | { sm: number; md: number; lg: number; xl: number };
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const [noOfCols, setNoOfCols] = useState<Cols>({ sm: 1, md: 2, lg: 3, xl: 4 });
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
    const [sortOrder, setSortOrder] = useState('')

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
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" height="650px" overflowY='scroll'>
          <GenreLists
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack justifyContent="space-between" pl="7px">

          <HStack spacing={5} mb={5} pl={2}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelector sortOrder={sortOrder} onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}/>
          </HStack>
          <Show above="lg">
            <Box mr={2} mb={2}>
              <DisplayOptions
                onSelectDisplayOption={handleSelectDisplayOption}
              />
            </Box>
          </Show>
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          columns={noOfCols}
          sortOrder={sortOrder}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
