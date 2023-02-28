const user = async (_, { id, teste }, { getUsers }) => {
    const users = await getUsers(`/${id}`);
    console.log(teste);
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
    User: {
        perUser: ({ id }) => {
            console.log('perUser', id);
            return 'Hello per user';
        },
    },
};
