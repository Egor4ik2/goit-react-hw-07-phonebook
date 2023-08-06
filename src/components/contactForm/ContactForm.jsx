import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { addContact } from '../../js/store/operations';
import { selectContacts } from '../../js/store/choises';



export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onAddContact = newContact => {
    if (contacts.find(el => el.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newName = {
      name,
      phone,
    };

    onAddContact(newName);
    setName('');
    setPhone('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            onChange={handleChange}
            value={name}
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Phone
          <input
            onChange={handleChange}
            value={phone}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

