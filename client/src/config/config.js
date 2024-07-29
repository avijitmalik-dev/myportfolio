import  axios  from 'axios';

const apiConfig = axios.create(({
    baseURL : "https://myportfolio-backend-five.vercel.app",
    withCredentials : true
}));

export default apiConfig;
 