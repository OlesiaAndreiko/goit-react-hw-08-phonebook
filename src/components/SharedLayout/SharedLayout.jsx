import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Container } from '../Container/Container.styled';

export const SharedLayout = () => {
    return(
        <Container>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </Container>
    )
}