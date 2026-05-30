import axios from 'axios'
  
const url = 'http://localhost:8000';  // Base URL of the backend server

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${url}/signup`, data)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}
export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${url}/login`, data)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}
// export  const payUsingPaytm = async (data) => {
//     try {
//         let response = await axios.post(`${url}/payment`, data);
//         return response.data;
//     } catch (error) {
//         console.log('Error', error);
//     }
// }
