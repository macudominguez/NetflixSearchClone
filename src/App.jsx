import { useEffect, useState } from "react";

import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Thumbnails from "./components/Thumbnails";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [search, setSearch] = useState("");

  const searchByTitle = async () => {
    const response = await axios.get(
      `https://imdb-api.com/en/API/Search/k_y92dhc90/${search}`
    );
    setSearchData(response.data.results);
  };
  useEffect(() => {
    if (search) {
      searchByTitle();
    }
  }, [search]);

  const searchInitialData = async (title) => {
    const responseMovies = await axios.get(
      `https://imdb-api.com/en/API/MostPopularMovies/k_y92dhc90`
    );
    const responseSeries = await axios.get(
      `https://imdb-api.com/en/API/MostPopularTVs/k_y92dhc90`
    );

    setMoviesData(responseMovies.data.items);
    setSeriesData(responseSeries.data.items);
  };

  useEffect(() => {
    if (!search) {
      searchInitialData();
    }
  }, [searchData]);

  return (
    <Box bg="black" minH="100vh">
      <Navbar setSearch={setSearch} />
      {search && (
        <>
          <Heading>{search}</Heading>
          <Thumbnails array={searchData} title="Movies" />
        </>
      )}
      {search || (
        <>
          <Banner />
          <Thumbnails array={moviesData} title="Películas más populares" />
          <Thumbnails array={seriesData} title="Series más populares" />
        </>
      )}
    </Box>
  );
}

export default App;
