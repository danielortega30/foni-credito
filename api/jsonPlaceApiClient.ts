import axios from "axios";

export const jsonPlaceApiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/', 
    timeout: 10000,
  });
  
  export default jsonPlaceApiClient;