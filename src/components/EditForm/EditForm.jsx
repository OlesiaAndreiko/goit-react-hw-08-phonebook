import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Overlay } from 'components/Container/Container.styled';
import { editContact } from 'redux/contacts/contacts.operations';

export const EditContact = ({ onClose, editingContact }) => {
  const { id, name, number } = editingContact;
  const dispatch = useDispatch();

  const handlerSubmit = (values, {resetForm}) => {

    const{nameEdit, numberEdit} = values;
    dispatch(
      editContact({
        id,
        ...{name: nameEdit, number: numberEdit}
      })
    );

    onClose();
    resetForm();
  };

  const onBackdropClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  }, [onClose]);

  return (   
     <Overlay onClick={onBackdropClose}> 
      <Flex
        bg="gray.100"
        justify="center"
        alignItems="center"
        flexDirection="column"
        p={100}
        gap={5}
      >
        <Flex gap={5}>
          <Text>{name}</Text>
          <Text>{number}</Text>
        </Flex>

        <Box bg="white" p={6} rounded="md" w={500} h={280}>
          <Formik
            initialValues={{
              nameEdit: name,
              numberEdit: number,
            }}
            onSubmit={handlerSubmit}
          >
            {() => (
              <Form>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="name" fontSize="1.25rem">
                      Name
                    </FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      name="nameEdit"
                      variant="filled"
                      fontSize="1.25rem"
                    />
                  </FormControl>{' '}
                  <FormControl>
                    <FormLabel htmlFor="number" fontSize="1.25rem">
                      Numder
                    </FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      name="numberEdit"
                      variant="filled"
                      fontSize="1.25rem"
                    />
                  </FormControl>
                  <Button type="submit" colorScheme="telegram" w="full">
                    Save Contact
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Overlay>
  );
};

EditContact.propTypes = {
  onClose: PropTypes.func.isRequired,
  editingContact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};
