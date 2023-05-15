import React from 'react'
import { Container, Nav } from 'react-bootstrap';


/**
 * The NoPage function returns a React component that displays a 404 error message with a link to the
 * homepage.
 * @returns A functional component called `NoPage` is being returned. It renders a container with an
 * error message and a link to go back to the home page.
 */
const NoPage = () => {
    return (
        <>
            <Container fluid>
                <div className="error-container">
                    <h1 className="error-heading">404</h1>
                    <p className="error-message">Lo sentimos, no existe la ruta especificada</p>
                    <Nav.Link href="/" className="d-flex justify-content-center align-items-center rounded-pill home-link mt-5">Ir a inicio</Nav.Link>
                </div>
            </Container>
        </>
    );
}

export default NoPage;