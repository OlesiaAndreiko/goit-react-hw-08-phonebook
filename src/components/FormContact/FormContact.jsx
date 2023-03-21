import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts.operations';
import { selectContacts } from '../../redux/contacts/contacts.selectors';
import { Heading } from '../Heading/Hading';

import {
  Form,
  BtnContact,
  FieldCaption,
  ContactInput,
} from './FormContact.styled';
import { Section } from 'components/Container/Container.styled';

export const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target.elements;

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          form.name.value.toLowerCase().trim()
      )
    ) {
      toast.warn(`${form.name.value} is already in contacts!`);
      event.target.reset();
      return;
    } else {
      dispatch(addContact({name: form.name.value, number: form.number.value}))
    }

    event.target.reset();
  };

  return (
    <Section>
      <Heading title={'phonebook'}></Heading>
      <Form onSubmit={handleSubmit}>
        <FieldCaption htmlFor="name">
          Name
          <ContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Z0-9-А-Яа-я_.]+(([' -][a-zA-Z0-9-А-Яа-я_. ])?[a-zA-Z0-9-А-Яа-я_.]*)*$"
            placeholder="Letters or numbers. Can apostrophe, dash and spaces."
            title="Name may contain letters, numbers, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FieldCaption>
        <FieldCaption htmlFor="number">
          Number
          <ContactInput
            type="tel"
            name="number"
            pattern="^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$"
            placeholder="Only digits from 9 to 14 characters. Can start with +."
            title="Phone number must be digits from 9 to 14 characters and can start with +"
            required
          />
        </FieldCaption>
        <BtnContact>Add Contact</BtnContact>
      </Form>
    </Section>
  );
};
