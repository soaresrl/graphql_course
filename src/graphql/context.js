import axios from 'axios';
import { makeUserDataLoader } from './user/dataloaders';
import { getUsers } from './user/utils';

const getPosts = (path = '/') => {
    return axios({
        method: 'get',
        url: process.env.API_URL + '/posts' + path,
    });
};

export const context = () => {
    return {
        userDataLoader: makeUserDataLoader(getUsers(axios)),
        getUsers: getUsers(axios),
        getPosts,
    };
};
