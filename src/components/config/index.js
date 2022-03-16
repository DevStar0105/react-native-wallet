import axios from "axios";

export const HTTP_REQUEST_URL = axios.create({
    baseURL: "http://192.168.107.155:3600/api",
    timeout: 60000,
})