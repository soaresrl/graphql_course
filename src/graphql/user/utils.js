export const getUsers =
    (axios) =>
    (path = '/') => {
        return axios({
            method: 'get',
            url: process.env.API_URL + '/users' + path,
        });
    };
