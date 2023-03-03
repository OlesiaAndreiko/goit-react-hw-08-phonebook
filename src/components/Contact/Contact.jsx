import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';
// import { ItemContact, Fullname } from './Contact.styled';
import { Button, Flex, Card, Heading, Text, Stack, CardBody } from '@chakra-ui/react';
import { DeleteIcon, PhoneIcon} from '@chakra-ui/icons';
export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Card direction={{ base: 'column', md: 'row' }}
      maxW='md'
      w={500}
  overflow='hidden'
  variant='outline'
  display='flex' align='center'
      
      key={id}>
         <Stack spacing='3'>
         <CardBody display='flex' justify="center" align='center' gap={5}>
        <Heading  size='lg'>{name}</Heading>
        <Flex justify="center" align='center' gap={3}>
          <PhoneIcon boxSize={5} color="blue.500"/>
          <Text fontSize='lg'>{number}</Text>{' '}
        </Flex>
        <Button
          rightIcon={<DeleteIcon />}
          type="button"
          // w={40}
          // h={35}
          justify="center" align='center'
          bg="#c6ccd1"
          color="#665959"
          fontSize="large"
          onClick={handleDelete}
        >
        </Button>
        </CardBody>
        </Stack>
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
