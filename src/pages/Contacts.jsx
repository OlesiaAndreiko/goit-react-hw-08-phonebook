import { ContactList } from "../components/ContactList/ContactList";
import { Helmet } from "react-helmet";
import { FormContact } from "../components/FormContact/FormContact";
import { Filter } from "../components/Filter/Filter";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "components/Container/Container.styled";

export default function Contacts(){

    return(
        <main>
            <Helmet prioritizeSeoTags>
                <title>My phonebook</title>
                <meta property="og:title" content="My phonebook"/>
            </Helmet>
            <Container>
            <FormContact />
            <Filter/>
            <ContactList/>
            <ToastContainer position="top-center" theme="colored" />
            </Container>
        </main>
    )
}