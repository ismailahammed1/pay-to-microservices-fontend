import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});

newRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("yourAuthToken"); // Replace with your actual token storage method

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


newRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors here...
    return Promise.reject(error);
  }
);

export default newRequest;
