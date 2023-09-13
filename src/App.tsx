import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // we can render breakpoint here
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="dodgerblue">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
