import axios from 'axios';
const instance = axios.create({
    baseURL : 'https://react-my-burger-c302f.firebaseio.com/'
});
export default instance;