import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
// build an interface for the response schema => gotten generically now

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  sortOrder: string,
  searchText: string | null,
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id, ordering: sortOrder, search: searchText } },
    [selectedGenre?.id, selectedPlatform?.id, searchText, sortOrder ]
  );
export default useGames;
