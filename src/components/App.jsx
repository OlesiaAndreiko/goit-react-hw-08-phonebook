// import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { PrivateRoute } from './PrvateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Homepages = lazy(() => import('../pages/Home'));
const RegisterPages = lazy(() => import('../pages/Register'));
const LoginPages = lazy(() => import('../pages/Login'));
const ContactsPages = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
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
