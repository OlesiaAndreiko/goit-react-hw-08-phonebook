// import {NavLink} from "react-router-dom"
import { StaledLink } from "./AuthNav.styled"


export const AuthNav = () => {
    return(
        <div>
            <StaledLink to='/register'>Register</StaledLink>
            <StaledLink to='/login'>Log In</StaledLink>
        </div>
    )
}