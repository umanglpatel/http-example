import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'; // not working
// instance.defaults.headers['Authorization'] = 'AUTH TOKEN FROM INSTANCE';  // works well

instance.interceptors.request.use(request => {
    console.log(request);
    // Edit request
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;
