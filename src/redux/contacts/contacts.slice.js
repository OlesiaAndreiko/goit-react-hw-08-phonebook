import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './contacts.operations';

const extraActions = [fetchContacts, addContact, deleteContact, editContact];
const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoadingContacts: false,
    errorContacts: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.items = state.items.map(contact => {
          if (contact.id === action.payload.id) {
            contact.name = action.payload.name;
            contact.number = action.payload.number;
          } 
            return contact;          
        });
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoadingContacts = true;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoadingContacts = false;
        state.errorContacts = null;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoadingContacts = false;
        state.errorContacts = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
