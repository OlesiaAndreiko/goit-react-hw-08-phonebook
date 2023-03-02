import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, _) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [register.rejected](state, action) {
      state.isLoading = false;
        state.error = action.payload;
    },
    [logIn.pending](state, _) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logIn.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logOut.pending](state, _) {
      state.isLoading = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [logOut.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isLoading = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = null;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const authReduser = authSlice.reducer;
