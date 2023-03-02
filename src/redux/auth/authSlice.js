import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoadingAuth: false,
  errorAuth: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, _) {
      state.isLoadingAuth = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoadingAuth = false;
      state.errorAuth = null;
    },
    [register.rejected](state, action) {
      state.isLoadingAuth = false;
      state.errorAuth = action.payload;
    },
    [logIn.pending](state, _) {
      state.isLoadingAuth = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoadingAuth = false;
      state.errorAuth = null;
    },
    [logIn.rejected](state, action) {
      state.isLoadingAuth = false;
      state.errorAuth = action.payload;
    },
    [logOut.pending](state, _) {
      state.isLoadingAuth = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoadingAuth = false;
      state.errorAuth = null;
    },
    [logOut.rejected](state, action) {
      state.isLoadingAuth = false;
      state.errorAuth = action.payload;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.errorAuth = null;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
      state.errorAuth = action.payload;
    },
  },
});

export const authReduser = authSlice.reducer;
