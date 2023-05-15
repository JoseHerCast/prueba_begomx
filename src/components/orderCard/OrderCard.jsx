import React, { useState, useEffect } from 'react'
import { useCargoToggleContext } from '../../providers/CargoProvider'
import { useNavigate } from 'react-router-dom';
import { Card, Image, Col, Row } from 'react-bootstrap'
import Freight from '../../assets/images/inspect/App BeGo/Contenedores/Cargo Orders/Order 1/header/FCL/freight.svg'
import Truck from '../../assets/images/inspect/App BeGo/Contenedores/Cargo Orders/Order 2/FTL/container-truck.svg'
import Pickup from '../../assets/images/inspect/App BeGo/Contenedores/Cargo Orders/Order 2/where to/address/Group 2.svg'
import Location from '../../assets/images/inspect/App BeGo/Contenedores/Cargo Orders/Order 2/where to/address/marker.svg'
import Eye from '../../assets/images/inspect/App BeGo/Contenedores/Cargo Orders/Group 4-1/eye.svg'
import ResumeButton from '../buttons/ResumeButton'
import NotificationBadge from '../notificationBadge/NotificationBadge'

/* const statusArray = [
    { id: 0, label: "dummy", class: "dummy" },
    { id: 1, label: "In transit", class: "blue-dot-bg" },
    { id: 2, label: "dummy2", class: "dummy2" },
    { id: 3, label: "Assigned", class: "grey-dot-bg" }
] */

/* The above code defines a React functional component called `OrderCard`. It takes in several props
including `orderNo`, `type`, `statusClass`, `statusString`, `destinations`, `startTimeMili`,
`endTimeMili`, `ordersData`, and `index`. */
const OrderCard = ({ orderNo, type, statusClass, statusString, destinations, startTimeMili, endTimeMili, ordersData, index }) => {
    /* const statusObj = statusArray.find(s => s.id === status);
    const badgeLabel = statusObj.label;
    const badgeClass = statusObj.class; */
    const changeCargoContext = useCargoToggleContext();
    const [startTime, setStartTime] = useState(0);
    const navigate = useNavigate();
    const icon = type === "FCL" ? Freight : Truck;
    const origin = destinations[0].address.split(',');
    const target = destinations[1].address.split(',');
    const stateOrigin = origin[origin.length - 2];
    const stateTarget = target[target.length - 2];
    const startDate = new Date(startTimeMili);
    const endDate = new Date(endTimeMili);

    const formattedStartDate = startDate.toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    });
    const formattedStartTime = `${String(startDate.getHours()).padStart(2, '0')}:${String(startDate.getMinutes()).padStart(2, '0')}`;

    const formattedEndDate = endDate.toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    });
    const formattedEndTime = `${String(endDate.getHours()).padStart(2, '0')}:${String(endDate.getMinutes()).padStart(2, '0')}`;


    useEffect(() => {
        /* `startTimeMili && setStartTime(startTimeMili)` is a conditional statement that checks if
        `startTimeMili` is truthy (not null, undefined, 0, false, or an empty string). If
        `startTimeMili` is truthy, it sets the state of `startTime` to `startTimeMili` using the
        `setStartTime` function. If `startTimeMili` is falsy, the statement does nothing. This is a
        way to conditionally update the state of `startTime` based on the value of `startTimeMili`. */
        startTimeMili && setStartTime(startTimeMili)
    }, [startTimeMili])

    /**
     * The handleClick function changes the cargo context with updated orders data and navigates to the
     * cargo details page.
     */
    const handleClick = () => {
        changeCargoContext({ ...ordersData, cargoIndexSelected: index });
        navigate('/cargo-details')
    }

    return (
        <>
            <p className='fs-5 mt-5'>Order <strong>#{orderNo}</strong></p>
            <Card>
                <Card.Header className='d-flex justify-content-between px-3 px-md-4 pt-3'>
                    <div className='d-flex'>
                        <Image src={icon} className='me-2' />
                        {type}
                    </div>
                    <div className='d-flex'>
                        <span className={statusClass + ' badge-status d-block align-self-center me-2'}></span>
                        <span>{statusString}</span>
                    </div>
                </Card.Header>
                <Card.Body className='px-3 px-md-4 py-5'>
                    <Row className='p-0 m-0'>
                        <Col xs={2} sm={1} className='d-flex flex-column p-0'>
                            <Image src={Pickup} />
                            <span className='track-bar mx-auto my-2'></span>
                            <Image src={Location} />
                        </Col>
                        <Col xs={10} md={11}>
                            <Row className='p-0 m-0'>
                                <Col xs={7} md={10} className='px-0 px-md-2'>
                                    <div className='address-container'>
                                        <p className='address-over'>PICKUP</p>
                                        <p><strong>{stateOrigin}</strong></p>
                                        <p>{origin.join(', ')}</p>
                                    </div>
                                </Col>
                                <Col xs={5} md={2} className='px-0 px-md-2'>
                                    <div className='address-container text-center justify-content-center'>
                                        <p className='text-center'>{formattedStartDate}</p>
                                        <p>{formattedStartTime}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='p-0 m-0 mt-4'>
                                <Col xs={7} md={10} className='px-0 px-md-2'>
                                    <div className='address-container'>
                                        <p className='address-over'>DROPOFF</p>
                                        <p><strong>{stateTarget}</strong></p>
                                        <p>{target.join(', ')}</p>
                                    </div>
                                </Col>
                                <Col xs={5} md={2} className='px-0 px-md-2'>
                                    <div className='address-container text-center justify-content-center'>
                                        <p>{formattedEndDate}</p>
                                        <p>{formattedEndTime}</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-end px-0 pt-3 pb-0'>
                    <NotificationBadge startTime={startTime} />
                    <ResumeButton path={'/cargo-details'} handleClick={handleClick} color={'yellow-btn'} label={'Resume'} icon={<Image src={Eye} />} />
                </Card.Footer>
            </Card>
        </>
    )
}

export default OrderCard