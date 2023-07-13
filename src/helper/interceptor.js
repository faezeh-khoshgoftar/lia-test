import axios from "axios";

const instance = axios.create({
  baseURL: "https://shopapi.liateam.com/api/rest/v1/",
});
export default instance;
