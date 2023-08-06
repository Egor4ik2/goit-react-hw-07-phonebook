import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './ContactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});