import axios from "axios";

// https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

export const API = axios.create({ baseURL: "https://api.openweathermap.org/data/2.5/" });
