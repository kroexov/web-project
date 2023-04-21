import axios from "axios";

const API_URL = "https://localhost:7022/";

export const getProviders = async () => {
    return await axios.get(API_URL + "provider");
  };