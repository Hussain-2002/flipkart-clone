import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (data) => {
    try {
        await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log('Error while calling signup API', error);
    }
};
// ✅ Add this function to fix the error
export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log('Error while calling login API', error);
    }
};
