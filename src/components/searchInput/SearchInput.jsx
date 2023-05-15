import React from 'react'
import { Form, FloatingLabel, Image, Container } from 'react-bootstrap';
import Magnify from '../../assets/images/inspect/App BeGo/Contenedores/Cargo Orders/Search/Group/search.svg'


const SearchInput = ({ label, id, type, placeholder, value, onSearch }) => {
    const handleInputChange = (event) => {
        onSearch(event.target.value);
    };
    return (
        <>
            <Container fluid className='d-flex my-input-group pt-3'>
                <span>
                    <Image src={Magnify} />
                </span>
                <FloatingLabel
                    controlId={id}
                    label={label}
                    className='flex-grow-1'
                >
                    <Form.Control type={type} placeholder={placeholder} value={value} onChange={handleInputChange} />
                </FloatingLabel>
            </Container>
        </>
    )
}

export default SearchInput