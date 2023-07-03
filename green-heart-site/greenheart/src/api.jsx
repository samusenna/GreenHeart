import axios from "axios";

const api = axios.create({
    //baseURL: "http://localhost:8080/api",
    baseURL: "http://20.75.55.236:8080/api"
});

export default api;
