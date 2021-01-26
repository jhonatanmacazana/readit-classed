import axios from "axios";

const serverRequest = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api/v1/"
      : "http://localhost:5000/api",
  withCredentials: true,
});

export default serverRequest;
