import React, { useState, useRef } from 'react'
import { useCargoContext } from '../../../providers/CargoProvider';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'
import Header from '../../../components/header/Header'
import DetailsCard from '../../../components/detailsCard/DetailsCard'
import DriverCard from '../../../components/driverCard/DriverCard'
import DriverImage from '../../../assets/images/inspect/App BeGo/Contenedores/Cargo Details Upcoming/Track Card/Driver/Driver.png'
import Check from '../../../assets/images/inspect/App BeGo/Contenedores/Cargo Details Upcoming/Track Card/Check/check-solid.svg'
import DetailsExpandable from '../../../components/detailsExpandable/DetailsExpandable'
import NoPage from '../../noPage/views/NoPage';

/* const destinations = [
    {
        "lat": 19.5475331,
        "lng": -99.2110099,
        "address": "Perif. Blvd. Manuel Ávila Camacho 3130, Valle Dorado, 54020 Tlalnepantla de Baz, Méx., Mexico",
        "startDate": 1649193900000,
        "zip_code": 54020,
        "place_id_pickup": "ChIJsUDXn2od0oURpAnsjV2k44A",
        "contact_info": {
            "name": "Federico Ramos",
            "telephone": "+52 57 84 64 25 ",
            "email": "prueba@prueba.com",
            "country_code": "mx",
            "rfc": "SAGF870828S13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -99.2110099,
                19.5475331
            ]
        },
        "raw_address": "perif. blvd. manuel avila camacho 3130, valle dorado, 54020 tlalnepantla de baz, mex., mexico",
        "evidence": {
            "pictures": [],
            "extra_notes": "",
            "signature": {}
        },
        "status": 0,
        "status_string": "En espera",
        "status_class": "grey-dot-bg"
    },
    {
        "startDate": 1649708460000,
        "endDate": 1649708880000,
        "lat": 27.4955923,
        "lng": -99.5077369,
        "zip_code": 88000,
        "place_id_dropoff": "ChIJa0_kQi4iYYYR5c_zAc3Rll8",
        "address": "Mariano Matamoros, Sector Centro, 88000 Nuevo Laredo, Tamps., Mexico",
        "contact_info": {
            "name": "Ignacio Canalla",
            "telephone": "+52 52 56 64 96 56",
            "email": "ignacio@bego.ai",
            "country_code": "mx",
            "rfc": "SAGF870828S13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -99.5077369,
                27.4955923
            ]
        },
        "raw_address": "mariano matamoros, sector centro, 88000 nuevo laredo, tamps., mexico",
        "evidence": {
            "pictures": [],
            "extra_notes": "Notas adicionales",
            "signature": {}
        },
        "status": 0,
        "status_class": "grey-dot-bg",
        "status_string": "En espera"
    }
]

const pickup = [
    {
        "active": true,
        "status": "Orden creada"
    },
    {
        "active": true,
        "status": "Orden asignada"
    },
    {
        "active": false,
        "status": "Recolección iniciada"
    },
    {
        "active": false,
        "status": "Recolección completada"
    }
] */

export function Details() {
    const [indexPickupData, setIndexPickupData] = useState(0)
    const cargoContext = useCargoContext();
    const referenceDrop = useRef(null)
    const navigate = useNavigate()
    const cargoDetails = cargoContext?.result;
    const destinations = cargoDetails?.destinations;
    const pickup = cargoDetails?.status_list?.pickup;

    const handlePickupDataChange = (index) => {
        setIndexPickupData(index);
        scrollToElement()
    }

    const handleTrackOrderClick = () => {
        console.log("Track Order");
    }

    const handleGoBack = () => {
        navigate('/cargo-orders')
    }

    const scrollToElement = () => {
        referenceDrop.current.scrollIntoView({ behavior: 'smooth' });
    };
    if (!cargoContext) {
        return (
            <NoPage />
        );
    }
    return (
        <>
            <Header handleNav={handleGoBack} title="Cargo Details" />
            <Row className='m-0 justify-content-end'>
                <Col className='my-card-style-alt mt-5 pe-0' xs={10}>
                    <DetailsCard handleChangeData={handlePickupDataChange} orderNo={cargoDetails?.order_number} reference={cargoDetails?.reference_number} destinations={destinations} />
                </Col>
            </Row>
            <Row className='m-0 justify-content-center'>
                <Col xs={12} md={10}>
                    <DriverCard driverImg={DriverImage} time={'10:30 PM'} checkIcon={Check} steps={pickup} handleClick={handleTrackOrderClick} />
                </Col>
            </Row>
            <Row className='m-0 justify-content-center'>
                <Col ref={referenceDrop} id='pickupDataDrop' xs={10}>
                    <DetailsExpandable index={indexPickupData} pickupData={destinations} />
                </Col>
            </Row>
        </>
    )
}