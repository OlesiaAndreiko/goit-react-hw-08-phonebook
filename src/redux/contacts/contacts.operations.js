import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET ​/contacts  //Get all user contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST ​/contacts  //Create a new contact
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const responce = await axios.post('/contacts', contact);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE ​/contacts​/{contactId}  //Delete contact
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

 // PATCH  ​/contacts​/{contactId}  //Update an existing contact
export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (editingContact, thunkAPI) => {
    try {
      const {_id: contactId, name, number} = editingContact;
      const responce = await axios.patch(`/contacts/${contactId}`, {name, number});
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  } 
)