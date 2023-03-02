import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoadingContacts = state => state.contacts.isLoading;

export const selectErrorContacts = state => state.contacts.error;

export const selectFilter = state => state.filters.search;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],

  (search, contacts) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    )
);

// ці обчислення були в компоненті ContactList
//   const newContacts = contacts.items.filter(contact =>
//     contact.name.toLowerCase().includes(searchField.search.toLowerCase())
//   );
