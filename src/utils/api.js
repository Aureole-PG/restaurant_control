import axios from 'axios'
const api = axios.create({
    baseURL: "https://tesis-restaurant-api.herokuapp.com",

})

export default api