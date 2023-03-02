import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { Contact } from '../Contact/Contact';
import { Heading } from 'components/Heading/Hading';
import { List } from './ContactList.staled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectErrorContacts, selectIsLoadingContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch =useDispatch();
  const isLoadingContacts = useSelector(selectIsLoadingContacts);
  const errorContacts = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Heading title={'contacts'} />
      {isLoadingContacts && !errorContacts && <b>Request in progress...</b>}
      {contacts.length ? (
        <List>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </List>
      ) : (
        <p>Start adding contacts!</p>
      )}
    </>
  );
};
