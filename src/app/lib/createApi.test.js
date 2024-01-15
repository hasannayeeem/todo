// import createApi from './createApi';

// const mockQuery = vi.fn((...args) => {
//   return {
//     path: '/mocked-path',
//     method: 'GET',
//     args,
//   };
// });

// const mockQueryFn = vi.fn((query) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ data: `Response for ${query.path}` });
//     }, 100);
//   });
// });

// describe('createApi', () => {
//   afterEach(() => {
//     vi.clearAllMocks();
//   });

//   it('should call queryFn with query and return response', async () => {
//     const api = createApi({ query: mockQuery, queryFn: mockQueryFn });
//     const args = ['arg1', 'arg2'];
//     const result = await api(...args);
//     expect(result).toEqual({ data: 'Response for /mocked-path' });
//     expect(mockQuery).toHaveBeenCalledWith('arg1', 'arg2');
//     expect(mockQueryFn).toHaveBeenCalledWith({ path: '/mocked-path', method: 'GET', args });
//   });

//   it('should call queryFn and transform the response when transformResponse is provided', async () => {
//     const mockTransformResponse = vi.fn((response) => ({
//       transformedData: response.data,
//     }));

//     const api = createApi({
//       query: mockQuery,
//       queryFn: mockQueryFn,
//       transformResponse: mockTransformResponse,
//     });
//     const args = ['arg1', 'arg2'];
//     const result = await api(...args);
//     expect(result).toEqual({ transformedData: 'Response for /mocked-path' });
//     expect(mockQuery).toHaveBeenCalledWith('arg1', 'arg2');
//     expect(mockQueryFn).toHaveBeenCalledWith({ path: '/mocked-path', method: 'GET', args });
//     expect(mockTransformResponse).toHaveBeenCalledWith({ data: 'Response for /mocked-path' });
//   });
// });
