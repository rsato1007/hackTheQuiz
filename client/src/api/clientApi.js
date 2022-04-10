// A seperate file for creating Axios instance for better organization.
import axios from "axios"

console.log('Whats that env?', process.env.NODE_ENV);
console.log("DON'T FORGET TO CHANGE === TO !==");
let HOST;
if (process.env.NODE_ENV !== "production") {
    HOST = "http://localhost:8000/api";
}
else {
    // HOST ="https://project3-app-flex525.herokuapp.com/api"
}

export default axios.create({
    baseURL: HOST,
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
    },
});