import axios from 'axios';

const getUsers = (path = '/') => {
    return axios({
        method: 'get',
        url: 'http://localhost:3000/users' + path,
    });
};

const getPosts = (path = '/') => {
    return axios({
        method: 'get',
        url: 'http://localhost:3000/posts' + path,
    });
};

export const context = () => {
    return {
        getUsers,
        getPosts,
    };
};
