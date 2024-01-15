// import axios from 'axios';
// import createBaseQuery from './createBaseQuery';
// import { getToken } from '@/utils/getToken';
// import { waitFor } from '@/utils/test-utils';


// vi.mock('@/utils/getToken');
// vi.mock('axios');

// describe('createBaseQuery', () => {
//   beforeEach(() => {
//     vi.clearAllMocks();
//   });

//   it('should make a successful authorized request', async () => {
//     const fetcher = createBaseQuery();
//     const requestProps = {
//       method: 'GET',
//       path: '/test-path',
//       headers: { 'X-Custom-Header': 'custom-header-value' },
//     };
//     const axiosResponse = {
//       data: 'Mocked Response Data',
//       status: 200,
//       statusText: 'OK',
//     };
//     axios.mockResolvedValue(axiosResponse);
//     const result = await fetcher(requestProps);
//     expect(result).toEqual('Mocked Response Data');
//     expect(axios).toHaveBeenCalledWith({
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         authorization: 'Bearer undefined',
//         'X-Custom-Header': 'custom-header-value',
//       },
//       data: undefined,
//       url: 'undefined/test-path',
//     });
//   });

//   it('should make a request ignoring the token', async () => {
//     const fetcher = createBaseQuery();
//     const requestProps = {
//       method: 'POST',
//       path: '/public-path',
//       ignoreToken: true,
//     };
//     const axiosResponse = {
//       data: 'Public Data',
//       status: 200,
//       statusText: 'OK',
//     };
//     axios.mockResolvedValue(axiosResponse);
//     const result = await fetcher(requestProps);
//     expect(result).toEqual('Public Data');
//     expect(axios).toHaveBeenCalledWith({
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: undefined,
//       url: 'undefined/public-path',
//     });
//   });

//   it('should handle unauthorized request and attempt to get a new token', async () => {
//     const fetcher = createBaseQuery();
//     const requestProps = {
//       method: 'GET',
//       path: '/unauthorized-path',
//     };
//     const axiosResponse = {
//       status: 403,
//     };
//     axios.mockRejectedValue({ axiosResponse });
//     // await fetcher(requestProps);
//     // waitFor(()=>{
//     //     expect(getToken).toHaveBeenCalledWith(true)
//     // })
//   });

//   it('should handle errors and make an error response', async () => {
//     const fetcher = createBaseQuery();
//     const requestProps = {
//       method: 'GET',
//       path: '/error-path',
//     };
//     const axiosResponse = {
//       data: { message: 'Internal Server Error' },
//       status: 500,
//       statusText: 'Internal Server Error',
//     };
//     axios.mockRejectedValue({ response: axiosResponse });
//     try {
//       await fetcher(requestProps);
//     } catch (error) {
//       expect(error).toEqual({ status: 500, message: 'Internal Server Error' });
//     }
//   });
// });
