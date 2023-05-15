import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import LeftChevron from '../../assets/images/inspect/App BeGo/Contenedores/Cargo Details Upcoming/Header/angle-small-down.svg'
import BellIcon from '../../assets/images/inspect/App BeGo/Contenedores/Cargo Details Upcoming/Header/bell.svg'

const Header = ({ title, handleNav }) => {
    return (
        <>
            <Col xs={10} className='mx-auto my-3'>
                <Row>
                    <Col className='clickable-row' onClick={handleNav} xs={1}>
                        <Image src={LeftChevron} />
                    </Col>
                    <Col className='text-center fs-5' xs={10}>{title}</Col>
                    <Col className='clickable-row' xs={1}>
                        <Image src={BellIcon} />
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default Header