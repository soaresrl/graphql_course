import DataLoader from 'dataloader';
import axios from 'axios';

const post = async (_, { id }, { getPosts }) => {
    const posts = await getPosts(`/${id}`);

    return posts.data;
};
const posts = async (_, { input }, { getPosts }) => {
    const apiFiltersInput = new URLSearchParams(input);
    const posts = await getPosts('/?' + apiFiltersInput);

    return posts.data;
};

const userDataLoader = new DataLoader(async (ids) => {
    const urlQuery = ids.join('&id=');
    const url = 'http://localhost:3000/users/?id=' + urlQuery;
    const response = await axios({
        method: 'get',
        url: url,
    });

    return ids.map((id) => response.data.find((user) => user.id === id));
});

const user = async (resolvedPostObj, _, { getUsers }) => {
    const { userId } = resolvedPostObj;

    return userDataLoader.load(userId);
};

export const postResolvers = {
    Query: {
        post,
        posts,
    },
    Post: {
        user,
    },
};
