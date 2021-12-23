import axios from 'axios';

const API_KEY = '898844de9ba9ce2e994c2ac843926efb';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
   const url = `${ROOT_URL}&q=${city},us`;
   const request = axios.get(url);

   return {
      type: FETCH_WEATHER,
      payload: request
   };
}