import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';

import { fetchContacts } from '../js/store/operations';
import { selectError, selectIsLoading } from '../js/store/choises';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
      {isLoading && !error && <b>Loading...</b>}
    </div>
  );
};
