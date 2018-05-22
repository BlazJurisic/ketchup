import Config from './Config'
import axios from 'axios'

const instance = axios.create({
    baseURL: Config.baseURL,
    timeout: 100000,
    headers: {
        'authorization-static': Config.AuthorizationStatic,
        'Content-Type': 'application/json',
    }
})

makeRequest = (config) => {
    console.log(config)
    return this.instance.request(config)
        .then(response => {
            console.log(response)
            return Promise.resolve(response)
        })
}

export default makeRequest
