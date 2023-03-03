import { Flex, Container } from '@chakra-ui/react';
import { StaledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container  maxW="container.lg" w='100%'>
        <Flex justifyContent="space-between" alignItems="center" >
      <StaledLink to="/register">Register</StaledLink>
      <StaledLink to="/login">Log In</StaledLink>
      </Flex>
    </Container>
  );
};
