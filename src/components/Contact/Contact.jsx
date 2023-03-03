import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';
import { ItemContact, BtnDelete, Fullname } from './Contact.styled';
import { Box, Button, Flex, Icon  } from '@chakra-ui/react';
import { DeleteIcon, PhoneIcon} from '@chakra-ui/icons';
export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ItemContact key={id}>
        <Fullname>{name}</Fullname>
        <Flex justify="center" align='center' gap={3}>
          <PhoneIcon boxSize={5} color="blue.500"/>
          <span>{number}</span>{' '}
        </Flex>
        <Button
          rightIcon={<DeleteIcon />}
          type="button"
          w={120}
          h={35}
          alignItems="center"
          bg="#c6ccd1"
          color="#665959"
          fontSize="large"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </ItemContact>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
