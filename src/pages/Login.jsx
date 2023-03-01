import { LoginForm } from 'components/LoginForm/LoginForm';
// import { Helmet } from 'react-helmet-async';

export default function Login(){
    return(
        <div>
            {/* <Helmet prioritizeSeoTags>
                <title>Login to my phonebook</title>
                <meta property="og:title" content="Login to my phonebook"/>
            </Helmet> */}
            <LoginForm/>
        </div>
    )
}