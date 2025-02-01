import { apiSlice } from './_apiSlice'

const apiGetTestPosts = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    fetchAllTestPosts: build.query({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
    }),
  }),
})

export const { useFetchAllTestPostsQuery } = apiGetTestPosts
