import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@shui/api';
import { authReducer } from '@shui/reducers';

export const store = configureStore({
    reducer : {
        api : apiSlice.reducer,
        auth : authReducer
    },
    middleware : (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;