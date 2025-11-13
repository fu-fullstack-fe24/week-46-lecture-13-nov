import { createSlice } from '@reduxjs/toolkit';
import type { UserState } from '@shui/interfaces';

const initialState : UserState = {
    username : null, 
    token : null
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setCredentials : (state, action) => {
            const { username, token } : UserState = action.payload;
            state.username = username;
            state.token = token;
        },
        clearCredentials : (state) => {
            state.username = null;
            state.token = null;
        },
    }
});

export const {setCredentials, clearCredentials} = authSlice.actions;
export const authReducer = authSlice.reducer;