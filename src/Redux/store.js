import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './Contacts/filterSlice';
import { contactsReducer } from './Contacts/contactsSlice';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
});