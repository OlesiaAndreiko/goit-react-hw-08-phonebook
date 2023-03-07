import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';
import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  // FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();  

  const handleSubmit = (values, {resetForm}) => {
    const { email, password } = values;
    dispatch(
      logIn({
        email: email,
        password: password,
      })      
    );

    resetForm();
  };

  return (
    <Flex bg="gray.100"  justify="center" pt={100} h="100vh" >
      <Box bg="white" p={6} rounded="md" w={500} h={290} >
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <form >
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email" fontSize='1.25rem'>Email Address</FormLabel>
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    variant="filled"
                    fontSize='1.25rem'
                  />
                </FormControl>
                <FormControl >
                <FormLabel htmlFor="password" fontSize='1.25rem'>Password</FormLabel>
                  <Field as={Input} 
                  type="password"
                  name="password"
                  fontSize='1.25rem'
                  />
                </FormControl>
                <Button type="submit" colorScheme='telegram' w='full' >Log In</Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
