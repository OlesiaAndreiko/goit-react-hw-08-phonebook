import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/contacts.selectors';
import { Contact } from '../Contact/Contact';
import { Heading } from 'components/Heading/Hading';
import { List } from './ContactList.staled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts.operations';
import {
  selectErrorContacts,
  selectIsLoadingContacts,
} from 'redux/contacts/contacts.selectors';
import { Section } from 'components/Container/Container.styled';
import { Skeleton, Stack, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectIsLoadingContacts);
  const errorContacts = useSelector(selectErrorContacts);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Heading title={'contacts'} />
      
      {isLoadingContacts && !errorContacts && (
        <Stack w={500}>
          <Skeleton h="30px" />
          <Skeleton h="30px" />
          <Skeleton h="30px" />
        </Stack>
      )}

      {(!contacts.length && isRefreshing) ? (
        <Text fontSize="22px">Start adding contacts!</Text>
      ) : (
        <List>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </Section>
  );
};
