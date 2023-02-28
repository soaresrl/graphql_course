const post = async (_, { id }, { getPosts }) => {
    try {
        const posts = await getPosts(`/${id}`);

        if (Math.random() > 0.5) {
            return {
                statusCode: 500,
                message: 'Post Timeout',
                timeout: 123,
            };
        }

        return posts.data;
    } catch (err) {
        return {
            statusCode: 404,
            message: 'Post not found',
            postId: id,
        };
    }
};
const posts = async (_, { input }, { getPosts }) => {
    const apiFiltersInput = new URLSearchParams(input);
    const posts = await getPosts('/?' + apiFiltersInput);

    return posts.data;
};

export const postResolvers = {
    Query: {
        post,
        posts,
    },
    Post: {
        unixTimestamp: ({ createdAt }) => {
            const timestamp = new Date(createdAt).getTime() / 1000;

            return Math.floor(timestamp);
        },
    },
    PostResult: {
        __resolveType: (obj) => {
            if (typeof obj.postId !== 'undefined') {
                return 'PostNotFoundError';
            }
            if (typeof obj.timeout !== 'undefined') {
                return 'PostTimeoutError';
            }

            if (typeof obj.id !== 'undefined') {
                return 'Post';
            }

            return null;
        },
    },
    PostError: {
        __resolveType: (obj) => {
            if (typeof obj.postId !== 'undefined') {
                return 'PostNotFoundError';
            }
            if (typeof obj.timeout !== 'undefined') {
                return 'PostTimeoutError';
            }
            return null;
        },
    },
};
