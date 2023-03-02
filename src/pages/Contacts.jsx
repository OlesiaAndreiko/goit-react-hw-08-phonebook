import { ContactList } from "../components/ContactList/ContactList";
// import { Helmet } from "react-helmet";
import { FormContact } from "../components/FormContact/FormContact";
import { Filter } from "../components/Filter/Filter";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "components/Container/Container.styled";
// import { selectIsLoading } from "redux/contacts/selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "redux/contacts/operations";

export default function Contacts(){
//     const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

    return(
        <div>
            {/* <Helmet prioritizeSeoTags>
                <title>Login to my phonebook</title>
                <meta property="og:title" content="Login to my phonebook"/>
            </Helmet> */}
            <Container>
            <FormContact />
            <Filter/>
            {/* <div>{isLoading && 'Request in progress...'}</div> */}
            <ContactList/>
            <ToastContainer position="top-center" theme="colored" />
            </Container>
        </div>
    )
}