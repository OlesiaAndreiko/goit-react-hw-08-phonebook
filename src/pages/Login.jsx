import { Flex, Spinner, Text } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';

export default function Login() {
  const { isLoadingAuth } = useAuth();

  return (
    <main>
      <Helmet prioritizeSeoTags>
        <title>Login to my phonebook</title>
        <meta property="og:title" content="Login to my phonebook" />
      </Helmet>
      {isLoadingAuth ? (
        <Flex justify="center" align="center" mt={30} gap={5}>
          <Spinner
            thickness="6px"
            color="blue.500"
            emptyColor="gray.200"
            size="xl"
          />{' '}
          <Text fontSize="30px">Authorization check...</Text>
        </Flex>
      ) : (
        <LoginForm />
      )}
    </main>
  );
}
