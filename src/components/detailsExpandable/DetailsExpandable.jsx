import React from 'react'
import { Accordion } from 'react-bootstrap'

/**
 * The DetailsExpandable function returns an accordion component that displays pickup or dropoff data,
 * including address, date, and contact information.
 * @returns A React component called DetailsExpandable is being returned. It takes two props, index and
 * pickupData, and renders an Accordion component with an Accordion.Item that displays pickup or
 * dropoff data based on the value of index. The data includes the address, date, contact telephone,
 * and contact email.
 */
const DetailsExpandable = ({ index, pickupData }) => {
    const address = pickupData[index].address;
    const date = new Date(pickupData[index].startDate)
    const contact = pickupData[index].contact_info
    const formattedDate = date.toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
    return (
        <>
            <Accordion className='my-accordion my-5'>
                <Accordion.Item>
                    <Accordion.Header>{index === 0 ? 'Pickup' : 'Dropoff'} Data</Accordion.Header>
                    <Accordion.Body className=''>
                        <p>{address}</p>
                        <p className='d-flex align-items-center'>{formattedDate} <span className='d-block mx-3 rounded-circle dot'></span> {`${date.getHours()}:${date.getMinutes()}`}</p>
                        <p>{contact.telephone}</p>
                        <p>{contact.email}</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default DetailsExpandable