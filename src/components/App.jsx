// import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
// import { ContactList } from '../components/ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { FormContact } from './FormContact/FormContact';
// import { Container } from './Container/Container.styled';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import Home from 'pages/Home';
// import Register from 'pages/Register';
// import Login from 'pages/Login';
// import Contacts from 'pages/Contacts';

const Homepages = lazy(() => import('../pages/Home'));
const RegisterPages = lazy(() => import('../pages/Register'));
const LoginPages = lazy(() => import('../pages/Login'))
const ContactsPages = lazy(()=> import('../pages/Contacts'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/contacts" element={<ContactsPages />} />
      </Route>
    </Routes>

    // <Container>
    //   <FormContact />
    //   <Filter/>
    //   <ContactList />
    //   <ToastContainer position="top-center" theme="colored" />
    // </Container>
  );
};
