import { ContactList } from "../components/ContactList/ContactList";
// import { Helmet } from "react-helmet";
import { FormContact } from "../components/FormContact/FormContact";
import { Filter } from "../components/Filter/Filter";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "components/Container/Container.styled";

export default function Contacts(){
    return(
        <div>
            {/* <Helmet prioritizeSeoTags>
                <title>Login to my phonebook</title>
                <meta property="og:title" content="Login to my phonebook"/>
            </Helmet> */}
            <Container>
            <FormContact />
            <Filter/>
            <ContactList/>
            <ToastContainer position="top-center" theme="colored" />
            </Container>
        </div>
    )
}