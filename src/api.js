import axios from "axios";

export const getMovieList = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWQ4YzMxODlkNzA5ZmI1ODM2NmU0ZmE4Y2U0YTY5MyIsInN1YiI6IjY0ZGU2ODg4NWFiODFhMDExYzJlMGE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UhQW0PfSpJLG9uMfpFwo2mfzFkb2v2BuOCFDdDTGr2g",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
  //   return await axios.request(options)
};

export const searchMovie = async (q) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${q}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWQ4YzMxODlkNzA5ZmI1ODM2NmU0ZmE4Y2U0YTY5MyIsInN1YiI6IjY0ZGU2ODg4NWFiODFhMDExYzJlMGE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UhQW0PfSpJLG9uMfpFwo2mfzFkb2v2BuOCFDdDTGr2g",
    },
  };

  try{
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  }catch(error){
    throw error
  }
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
};
