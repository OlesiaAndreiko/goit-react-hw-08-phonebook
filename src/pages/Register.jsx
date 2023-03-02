import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { Helmet } from 'react-helmet';

export default function Register(){
    return(
        <div>
            {/* <Helmet prioritizeSeoTags>
                <title>Register to create a phone book</title>
                <meta property="og:title" content="Register to create a phone book"/>
            </Helmet> */}
            <RegisterForm/>
        </div>
    )
}