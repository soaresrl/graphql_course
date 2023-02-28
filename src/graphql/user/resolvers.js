const user = async (_, { id, teste }, { getUsers }) => {
    const users = await getUsers(`/${id}`);
    return users.data;
};
const users = async (obj, { input }, { getUsers }, info) => {
    const inputApiFilters = new URLSearchParams(input);

    const users = await getUsers('/?' + inputApiFilters);

    return users.data;
};

export const userResolvers = {
    Query: {
        user,
        users,
    },
};
