import axios from 'axios'
const baseUrl = 'http://localhost:4000'

const logIn = (payload: any) => {
    console.log('payload', payload)
    return axios.post(baseUrl + '/auth/users/login', payload)
}

const logInSaga = async (payload: any) => {
    console.log('payload', payload)
    return await axios.post(baseUrl + '/auth/users/login', payload)
}

export { logIn, logInSaga }
