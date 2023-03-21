import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

const validatePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchemaContact = yup.object().shape({
  nameEdit: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  numberEdit: yup
    .string()
    .matches(validatePhoneNumber, 'Phone number is not valid')
    .required('Required'),
});


export const EditContact = ({ onClose, editingContact }) => {
  const { id, name, number } = editingContact;
  const dispatch = useDispatch();

  const handlerSubmit = (values, { resetForm }) => {
    const { nameEdit, numberEdit } = values;
    dispatch(
      editContact({
        id,
        ...{ name: nameEdit, number: numberEdit },
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

        <Box bg="white" p={6} rounded="md" w={500} h="100%">
          <Formik
            validationSchema={validationSchemaContact}
            initialValues={{
              nameEdit: name,
              numberEdit: number,
            }}
            onSubmit={handlerSubmit}
          >
            {({ errors, touched }) => (
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
                    {errors.nameEdit && touched.nameEdit ? (
                      <Box fontSize="0.75rem" c="red">
                        {errors.nameEdit}
                      </Box>
                    ) : null}
                  </FormControl>
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
                    {errors.numberEdit && touched.numberEdit ? (
                      <Box fontSize="0.75rem" color="red">
                        {errors.numberEdit}
                      </Box>
                    ) : null}
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
