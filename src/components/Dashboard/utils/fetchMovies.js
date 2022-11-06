import axios from "axios";

const keywordSearch = async (search, pageParam) => {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;
  const popularURL = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=`;

  let resp;

  try {
    if (search === "") {
      resp = await axios.get(`${popularURL}${pageParam}`);
    } else {
      resp = await axios.get(
        `${apiUrl}search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=${pageParam}`
      );
    }

    return resp.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default keywordSearch;
