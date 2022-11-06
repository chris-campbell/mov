import { useEffect, useState } from "react";

const useFetchMovies = async () => {
  const [movies, setMovies] = useState({});

  const fetchMovies = async ({ pageParam = 1 }) => {
    let resp;

    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_KEY;
    const popularURL = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=`;

    try {
      if (search === "") {
        resp = await axios.get(`${popularURL}${pageParam}`);
      } else {
        resp = await axios.get(
          `${apiUrl}search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=${pageParam}`
        );
      }

      console.log("Q", resp.data);
      return resp.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useFetchMovies;
