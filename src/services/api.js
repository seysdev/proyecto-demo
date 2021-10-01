import axios from "axios";
import store from "../store";

export const apiBase = axios.create({
  baseURL: "http://localhost:3000",
});

// Add a request interceptor
apiBase.interceptors.request.use(
  function (config) {
    console.log("request!!!");
    store.dispatch({
      type: "SET_LOADER",
      payload: true,
    });

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiBase.interceptors.response.use(
  function (response) {
    console.log("response!!!");
    store.dispatch({
      type: "SET_LOADER",
      payload: false,
    });
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
