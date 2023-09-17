import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { ReactNode, useState } from "react";
import GenreLists from "./components/GenreLists";
import StackedView from "./components/StackedView";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import DisplayOptions from "./components/DisplayOptions";

export type ViewMode = "GameGrid" | "StackedView";

const App = () => {
 
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <GridItem area="aside">
          <GenreLists
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
      <HStack justifyContent="space-between">
        <PlatformSelector />
        <Show above= 'lg'>
          <Box mr={2}>
            <DisplayOptions />
          </Box>
        </Show>
        </HStack>
      <GameGrid selectedGenre={selectedGenre} />
      
      </GridItem>
    </Grid>
  );
};

export default App;
