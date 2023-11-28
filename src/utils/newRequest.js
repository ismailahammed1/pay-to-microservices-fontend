import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});

newRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors here
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Response error:", error.response.data);
      console.error("Status code:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Generic error:", error.message);
    }

    return Promise.reject(error); // Reject the promise to propagate the error further
  }
);

export default newRequest;
