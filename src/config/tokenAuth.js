import client from './axios';

const tokenAuth = token => {
    if(token) {
        client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete client.defaults.headers.common['Authorization'];
    }
}

export default tokenAuth;