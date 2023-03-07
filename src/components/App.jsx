import { Flex, Spinner, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/auth.operations';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { PrivateRoute } from './PrvateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Homepages = lazy(() => import('../pages/Home'));
const RegisterPages = lazy(() => import('../pages/Register'));
const LoginPages = lazy(() => import('../pages/Login'));
const ContactsPages = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Flex justify="center" align="center" gap={5} mt={30}>
      <Spinner thickness="6px" color="blue.500" emptyColor="gray.200" size='xl'/>{' '}
      <Text fontSize='30px'>Refreshing user...</Text>
    </Flex>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepages />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPages />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginPages />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPages />} />
          }
        />
      </Route>
    </Routes>
  );
};
