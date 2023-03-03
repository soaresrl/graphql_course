import DataLoader from 'dataloader';

export const makeUserDataLoader = (getUsers) => {
    return new DataLoader(async (ids) => {
        const urlQuery = ids.join('&id=');
        const response = await getUsers('?id=' + urlQuery);

        return ids.map((id) => response.data.find((user) => user.id === id));
    });
};
