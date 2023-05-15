import React from 'react'
import { Form, FloatingLabel, Image, Container } from 'react-bootstrap';
import Magnify from '../../assets/images/inspect/App BeGo/Contenedores/Cargo Orders/Search/Group/search.svg'


/**
 * This is a React component for a search input field that calls a function with the input value when
 * the user types.
 * @returns A React functional component called `SearchInput` is being returned. It takes in several
 * props such as `label`, `id`, `type`, `placeholder`, `value`, and `onSearch`. It renders a search
 * input field with a label and a magnifying glass icon. When the input value changes, it calls the
 * `onSearch` function with the new input value as an argument.
 */
const SearchInput = ({ label, id, type, placeholder, value, onSearch }) => {
    /**
     * This function handles input change events and calls the onSearch function with the input value
     * as an argument.
     */
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