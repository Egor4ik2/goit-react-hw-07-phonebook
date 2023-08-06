import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../js/store/choises';
import { deleteContact } from '../../js/store/operations';

export const ContactList = () => {
  const data = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onContactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const createContactsMarkup = ({ id, name, phone }) => {
    return (
      <li key={id}>
        <span>
          <b>{name}</b>
        </span>
        <span>
          <i>{phone}</i>
        </span>
        <button type="button" onClick={() => onContactDelete(id)}>
          Delete
        </button>
      </li>
    );
  };

  if (filter) {
    return (
      <ul>
        {data
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(el => {
            return createContactsMarkup(el);
          })}
      </ul>
    );
  }

  return (
    <ul>
      {data.map(el => {
        return createContactsMarkup(el);
      })}
    </ul>
  );
};
