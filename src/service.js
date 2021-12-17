import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://restapiecomerce.herokuapp.com//'
})

export const api = {
    get(endpoint) {
        return instance.get(endpoint)
    },
    post(endpoint, body) {
        return instance.post(endpoint, body)
    },
    delete(endpoint) {
        return instance.delete(endpoint)
    },
    put(endpoint, body) {
        return instance.put(endpoint, body)
    }
}