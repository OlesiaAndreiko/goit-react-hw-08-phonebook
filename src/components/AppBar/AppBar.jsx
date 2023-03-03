import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { Header } from './AppBar.styled';
import { useAuth } from 'hooks';
import { Container, Flex } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Container maxW="container.lg" w='100%'>
        <Flex justifyContent="space-between" alignItems="center" >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Container>
    </Header>
  );
};
