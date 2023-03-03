import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth.operations';
import { useAuth } from 'hooks';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box p={4} marginLeft="auto">
      <Flex alignItems="center" gap={8}>
        <Text as="p" fontWeight={700} color="#2a363b">
          Welcome,{' '}
          <Text as="span" color="#2196f3">
            {' '}
            {user.name}
          </Text>
        </Text>
        <Button
          bgColor="#c6ccd1"
          fontSize="x-large"
          color="#665959"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Flex>
    </Box>
  );
};
