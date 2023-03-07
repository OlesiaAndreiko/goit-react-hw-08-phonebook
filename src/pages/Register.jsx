import { Flex, Spinner, Text } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';

export default function Register() {
  const { isLoadingAuth } = useAuth();

  return (
    <main>
      <Helmet prioritizeSeoTags>
        <title>Registration of a new phonebook user</title>
        <meta
          property="og:title"
          content="Registration of a new phonebook user"
        />
      </Helmet>
      {isLoadingAuth ? (
        <Flex justify="center" align="center" gap={5} mt={30}>
          <Spinner
            thickness="6px"
            color="blue.500"
            emptyColor="gray.200"
            size="xl"
          />{' '}
          <Text fontSize="30px">User Registration...</Text>
        </Flex>
      ) : (
        <RegisterForm />
      )}
    </main>
  );
}