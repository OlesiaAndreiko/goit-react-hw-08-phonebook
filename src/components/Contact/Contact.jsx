import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';
// import { ItemContact, Fullname } from './Contact.styled';
import {
  IconButton,
  Flex,
  Card,
  Text,
  CardBody,
} from '@chakra-ui/react';
import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Card
        direction={{ base: 'column', md: 'row' }}
        noOfLines={[1, 2, 3]}
        fontSize="22px"
        key={id}
      >
        <CardBody display="flex" justifyContent='space-between' alignItems="center" gap={5} p={2}>
          
          <Text noOfLines={[1, 2, 3]} w={300}>
            {name}
          </Text>

          <Flex justify="flex-end" align="center" gap={3} >
            
          <Flex align="center" gap={5}>
          <PhoneIcon boxSize={5} color="blue.500"/>
          <Text>{number}</Text>{' '}
          </Flex>    

          </Flex>
          <IconButton
            icon={<DeleteIcon />}
            aria-label='Delete contact'
            bg="#c6ccd1"
            color="#665959"
            size='md'
            onClick={handleDelete}
          />
        </CardBody>
      </Card>
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
