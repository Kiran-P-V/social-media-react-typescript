import axios from "axios";

const HTTP_CONSTANTS = {
  API_URL: "http://localhost:5000",
  HTTP_HEADERS: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const axiosClient = axios.create({
  headers: HTTP_CONSTANTS.HTTP_HEADERS,
  baseURL: HTTP_CONSTANTS.API_URL,
});

export const postRequest = async (url: string, payload: {}) => {
  console.log({ url });
  console.log({ payload });

  try {
    const { data } = await axiosClient.post(url, payload);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRequest = async (url: string, payload: {}) => {
  try {
    const { data } = await axiosClient.post(url, payload);
    return data;
  } catch (error) {
    console.log(error);
  }
};
