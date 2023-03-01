import DataLoader from 'dataloader';

export const makeUserDataLoader = (getUsers) => {
    return new DataLoader(async (ids) => {
        const urlQuery = ids.join('&id=');
        const url = 'http://localhost:3000/users/?id=' + urlQuery;
        const response = await getUsers('?id=' + urlQuery);

        return ids.map((id) => response.data.find((user) => user.id === id));
    });
};
