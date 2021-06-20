
import axios from 'axios';

/*
    It creates an Http object and returns back to any module which imports
    You can use fetch but with fetch you have to response.json()
    better you go with axios

    baseURL => localhost:8080/api runs on node-res-api
    start node server using : node server.js
*/
export default axios.create({
    baseURL : 'http://localhost:8080/api',
    headers : {
        "Content-type" : "application/json"
    }
});