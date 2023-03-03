import axios from 'axios';
import { makePostDataLoader } from './post/dataloader';
import { getPosts } from './post/utils';
import { makeUserDataLoader } from './user/dataloaders';
import { getUsers } from './user/utils';

export const context = () => {
    return {
        userDataLoader: makeUserDataLoader(getUsers(axios)),
        postDataLoader: makePostDataLoader(getPosts(axios)),
        getUsers: getUsers(axios),
        getPosts: getPosts(axios),
    };
};
