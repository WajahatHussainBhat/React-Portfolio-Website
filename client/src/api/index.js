import axios from "axios";

const API = axios.create({ baseURL: "https://react-portfolio-a6u2.onrender.com" });


export const sendMessage = (name, email, message) => API.post("/Message", {name, email, message})