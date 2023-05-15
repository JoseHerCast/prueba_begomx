import React from 'react'
import { Card, Col, Row, Image } from 'react-bootstrap'
import Pickup from '../../assets/images/inspect/App BeGo/Contenedores/Cargo Details Upcoming active/Active button/truck.svg'

const statusArray = [
    { id: 0, label: "On hold", class: "grey-dot-bg" },
    { id: 1, label: "Accepted", class: "blue-dot-bg" },
    { id: 2, label: "dummy2", class: "dummy2" },
    { id: 3, label: "dummy", class: "dummy" }

]

const DetailsCard = ({ orderNo, reference, destinations, handleChangeData }) => {
    const origin = destinations[0];
    const target = destinations[1];
    const originAddr = origin.address.split(',');
    const targetAddr = target.address.split(',');
    const originState = originAddr[originAddr.length - 2];
    const targetState = targetAddr[targetAddr.length - 2];

    const originStatusObj = statusArray.find(s => s.id === origin.status);
    const originBdgLabel = originStatusObj.label;
    const originBdgClass = originStatusObj.class;
    const targetStatusObj = statusArray.find(s => s.id === target.status);
    const targetBdgLabel = targetStatusObj.label;
    const targetBdgClass = targetStatusObj.class;

    return (
        <>
            <Card>
                <Card.Header className='d-flex flex-column justify-content-center px-4 pt-3'>
                    <p id='text-header-over'>Referencia {reference}</p>
                    <p id='text-header-title'>Order #<strong>{orderNo}</strong></p>
                </Card.Header>
                <Card.Body className='px-3 px-md-5 py-3'>
                    <Row className='p-0 m-0'>
                        <Col xs={2} md={1} className='d-flex flex-column justify-content-center p-0'>
                            <span className='d-flex justify-content-center rounded-circle oval-shape-ext mx-auto'>
                                <Image className='align-self-center rounded-circle oval-shape-int' src={Pickup} />
                            </span>
                            <span className='track-bar mx-auto my-2'></span>
                            <span className='d-flex justify-content-center rounded-circle rec-shape-ext mx-auto'>
                                <span className='align-self-center rounded-circle rec-shape-int'></span>
                            </span>
                        </Col>
                        <Col xs={10} md={11}>
                            <Row onClick={() => handleChangeData(0)} className='clickable-row p-0 m-0 pb-3 border-bottom-div'>
                                <div className='address-container'>
                                    <p className='address-over'>PICKUP</p>
                                    <p><strong>{originState}</strong></p>
                                    <p>{originAddr.join(', ')}</p>
                                    <div className='d-flex justify-content-center align-items-center badge-status-alt'>
                                        <span className={originBdgClass + ' badge-status d-block me-2'}></span>
                                        {originBdgLabel}
                                    </div>
                                </div>
                            </Row>
                            <Row onClick={() => handleChangeData(1)} className='clickable-row p-0 m-0 mt-4'>
                                <div className='address-container'>
                                    <p className='address-over'>DROPOFF</p>
                                    <p><strong>{targetState}</strong></p>
                                    <p>{targetAddr.join(', ')}</p>
                                    <div className='d-flex justify-content-center align-items-center badge-status-alt'>
                                        <span className={targetBdgClass + ' badge-status d-block me-2'}></span>
                                        {targetBdgLabel}
                                    </div>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default DetailsCard