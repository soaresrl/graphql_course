import DataLoader from 'dataloader';

export const makePostDataLoader = (getPosts) => {
    return new DataLoader(async (ids) => {
        const urlQuery = ids.join('&userId=');
        const response = await getPosts('?userId=' + urlQuery);

        return ids.map((id) => {
            return response.data.filter((post) => post.userId == id);
        });
    });
};
