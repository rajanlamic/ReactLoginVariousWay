import axios from 'axios'

const baseUrl = 'http://localhost:4000/'

const retrieveList = () => {
    return axios.get(baseUrl + 'users/list')
}

export { retrieveList }
