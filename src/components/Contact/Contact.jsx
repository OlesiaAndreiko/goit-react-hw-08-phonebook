import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';
import { IconButton, Flex, Card, Text, CardBody } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, PhoneIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { EditContact } from 'components/EditForm/EditForm';

export const Contact = ({ contact }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);


  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

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
        <CardBody
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap={5}
          p={2}
        >
          <Text noOfLines={[1, 2, 3]} w={300}>
            {name}
          </Text>

          <Flex align="center" gap={5} w={250}>
            <PhoneIcon boxSize={5} color="blue.500" />
            <Text>{number}</Text>{' '}
          </Flex>

          <Flex align="center" gap={3}>
            <IconButton
              icon={<EditIcon />}
              aria-label="Delete contact"
              bg="#c6ccd1"
              color="#212121"
              size="md"
              onClick={toggleModal}
            />
            <IconButton
              icon={<DeleteIcon />}
              aria-label="Delete contact"
              bg="#c6ccd1"
              color="#665959"
              size="md"
              onClick={handleDelete}
            />
          </Flex>
        </CardBody>
        {isOpenModal && <EditContact onClose={toggleModal} editingContact={contact} />}
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
