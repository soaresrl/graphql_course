export const getPosts =
    (axios) =>
    (path = '/') => {
        return axios({
            method: 'get',
            url: process.env.API_URL + '/posts' + path,
        });
    };
