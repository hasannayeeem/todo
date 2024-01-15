const createApi = ({ query, queryFn, transformResponse }) => {
    return async (...args) => {
        const result = await queryFn(query(...args));
        if (typeof transformResponse === 'function') {
            return transformResponse(result);
        }
        return result;
    };
};

export default createApi;