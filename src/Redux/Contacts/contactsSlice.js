import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchContacts,
  addContact,
  delContact,
  toggleCompleted,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const notifyAdd = () => toast("Contact Add");
const notifyDelete = () => toast("Contact Delete");

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },

  extraReducers: builder =>
  builder
  .addCase(fetchContacts.pending, (state, action) => {
    state.isLoading = true;
  })
  .addCase(fetchContacts.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  })
  .addCase(fetchContacts.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  .addCase(addContact.pending, (state, action) => {
    state.isLoading = true;
  })
  .addCase(addContact.fulfilled, (state, action) => {
    console.log(state, action);
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
    notifyAdd();
  })
  .addCase(addContact.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  .addCase(delContact.pending, (state, action) => {
    state.isLoading = true;
  })
  .addCase(delContact.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(
      contact => contact.id === action.payload.id
    );
    state.items.splice(index, 1);
    notifyDelete();
  })
  .addCase(delContact.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  .addCase(toggleCompleted.pending, (state, action) => {
    state.isLoading = true;
  })
  .addCase(toggleCompleted.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(
      contact => contact.id === action.payload.id
    );
    state.items.splice(index, 1, action.payload);
  })
  .addCase(toggleCompleted.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  }),
});

export const contactsReducer = contactsSlice.reducer;