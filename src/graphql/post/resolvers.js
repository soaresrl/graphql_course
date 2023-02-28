const post = async (_, { id }, { getPosts }) => {
    const posts = await getPosts(`/${id}`);

    return posts.data;
};
const posts = async (_, { input }, { getPosts }) => {
    const apiFiltersInput = new URLSearchParams(input);
    const posts = await getPosts('/?' + apiFiltersInput);

    return posts.data;
};

const user = async (resolvedPostObj, _, { getUsers }) => {
    const { userId } = resolvedPostObj;
    const user = await getUsers('/' + userId);

    return user.data;
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
