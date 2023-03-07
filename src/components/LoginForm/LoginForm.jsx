import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';
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

export const LoginForm = () => {
  const dispatch = useDispatch();  

  const handlerSubmit = (values, {resetForm}) => {
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
          onSubmit={handlerSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl  onSubmit={handleSubmit} >
                  <FormLabel htmlFor="email" fontSize='1.25rem'>Email Address</FormLabel>
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    variant="filled"
                    fontSize='1.25rem'
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password} >
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
                <Button type="submit" colorScheme='telegram' w='full' >Log In</Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
