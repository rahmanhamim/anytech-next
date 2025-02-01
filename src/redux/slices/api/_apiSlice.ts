import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApiURL = 'https://jsonplaceholder.typicode.com'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseApiURL }),
  endpoints: () => ({}),
  tagTypes: [],
})
