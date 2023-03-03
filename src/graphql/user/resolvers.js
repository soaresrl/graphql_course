const user = async (_, { id, teste }, { getUsers }) => {
    const users = await getUsers(`/${id}`);
    return users.data;
};
const users = async (obj, { input }, { getUsers }, info) => {
    const inputApiFilters = new URLSearchParams(input);

    const users = await getUsers('/?' + inputApiFilters);

    return users.data;
};

const posts = ({ id }, _, { postDataLoader }) => {
    return postDataLoader.load(id);
};

export const userResolvers = {
    Query: {
        user,
        users,
    },
    User: {
        posts,
    },
};
