import { AuthNav } from "../AuthNav/AuthNav"
import { Navigation } from "../Navigation/Navigation"
import { UserMenu } from "../UserMenu/UserMenu"
import { Header } from "./AppBar.styled"
import { useAuth } from 'hooks';

export const AppBar= () => {
    const { isLoggedIn } = useAuth();
    return(
        <Header>
            <Navigation/>
            {isLoggedIn? <UserMenu/> : <AuthNav/>}
        </Header>
    )
}