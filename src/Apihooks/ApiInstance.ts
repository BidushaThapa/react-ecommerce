
import axios from "axios"
import { error } from "console"
import { response } from "express"
let BASEURL ="https://dummyjson.com"

const Api=axios.create({
    baseURL:BASEURL,
})
Api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default Api;