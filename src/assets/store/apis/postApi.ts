import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/', // Cambia esto según tu API
  }),
  endpoints: (builder) => ({
    // Obtener todos los posts
    getPosts: builder.query({
      query: () => 'posts',
    }),
    // Obtener un post por título
    getPost: builder.query({
      query: (titulo) => `posts/${titulo}`,
    }),
    // Crear un nuevo post
    createPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost, // Se manda el objeto nuevo como body
      }),
    }),
    // Eliminar un post por id
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useCreatePostMutation, useDeletePostMutation } = postApi;
