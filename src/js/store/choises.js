export const selectContacts = state => state.contacts.contactsArray;

export const selectFilter = state => state.filter.filterValue;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
 