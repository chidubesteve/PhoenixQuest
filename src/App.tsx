import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import GenreLists from "./components/GenreLists";
import DisplayOptions from "./components/DisplayOptions";
import StackedView from "./components/StackedView";
import { Genre } from "./hooks/useGenres";

const App = () => {
  // const [viewMode, setViewMode] = useState<"grid" | "stacked">("grid");

    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // // Callback function to handle view mode change
  // const handleViewModeChange = (mode) => {
  //   setViewMode(mode);
  // };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{base: '1fr',
    lg: '200px 1fr'}}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" >
          <GenreLists onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>

        {/* {viewMode === "grid" ? <GameGrid /> : <StackedView />} */}
      </GridItem>
    </Grid>
  );
};

export default App;
