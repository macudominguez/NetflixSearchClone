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
      `https://imdb-api.com/en/API/Search/k_n8ak49wr/${search}`
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
      `https://imdb-api.com/en/API/MostPopularMovies/k_n8ak49wr`
    );
    const responseSeries = await axios.get(
      `https://imdb-api.com/en/API/MostPopularTVs/k_n8ak49wr`
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
          <Thumbnails array={moviesData} title="Most Popular Movies" />
          <Thumbnails array={seriesData} title="Most Popular TV Series" />
        </>
      )}
    </Box>
  );
}

export default App;
