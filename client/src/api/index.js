import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });


export const sendMessage = (name, email, message) => API.post("/Message", {name, email, message})