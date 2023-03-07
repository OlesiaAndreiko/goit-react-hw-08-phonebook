import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';
import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handlerSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    resetForm();
  };

  return (
    <Flex bg="gray.100" justify="center" pt={100} h="100vh">
      <Box bg="white" p={6} rounded="md" w={500} h={380}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={handlerSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="name" fontSize="1.25rem">
                    Username
                  </FormLabel>
                  <Field
                    as={Input}
                    type="text"
                    name="name"
                    variant="filled"
                    fontSize="1.25rem"
                  />
                </FormControl>{' '}
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="email" fontSize="1.25rem">
                    Email Address
                  </FormLabel>
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    variant="filled"
                    fontSize="1.25rem"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                <FormLabel htmlFor="password" fontSize='1.25rem'>Password</FormLabel>
                  <Field as={Input} 
                  type="password"
                  name="password"
                  fontSize='1.25rem'
                  validate={(value) => {
                    if (value.length <= 4) {
                      return "Password should be over 4 characters";
                    }
                  }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme='telegram' w='full'>Register</Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
