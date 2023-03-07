import { FilerWrap, FieldCaption, ContactInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/contacts.selectors';
import { searchContact } from '../../redux/contacts/filter.slise';
import { Heading } from 'components/Heading/Hading';
import { Section } from 'components/Container/Container.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);  
  const dispatch = useDispatch();
  
  const handleChange = event => dispatch(searchContact(event.target.value));

  return (
    <Section>
    <Heading title={'Search contacts'} />
    <FilerWrap>
      <FieldCaption htmlFor="search">
        Find contact by name
        <ContactInput
          type="text"
          name="search"
          value={filter}
          onChange={handleChange}
          placeholder="Please start typing name..."
        />
      </FieldCaption>
    </FilerWrap>
    </Section>
  );
};
