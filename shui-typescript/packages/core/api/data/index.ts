import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AuthResponse, NoteResponse, User } from '@shui/interfaces';

export const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://a6gmq38ael.execute-api.eu-north-1.amazonaws.com'
    }),
    endpoints : (builder) => ({
        getNotes : builder.query<NoteResponse, void>({
            query : () => ({
                url : '/api/notes'
            })
        }),
        registerUser : builder.mutation<AuthResponse, User>({
            query : (user) => ({
                method : 'POST',
                url : '/api/auth/register',
                body : user
            })
        }),
        loginUser : builder.mutation<AuthResponse, User>({
            query : (user) => ({
                method : 'POST',
                url : '/api/auth/login',
                body : user
            })
        })
    })
});

export const {
    useGetNotesQuery,
    useRegisterUserMutation,
    useLoginUserMutation
} = apiSlice;