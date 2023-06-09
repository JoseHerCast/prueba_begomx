import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch'
import { Col } from 'react-bootstrap'
import Header from '../../../components/header/Header'
import SearchInput from '../../../components/searchInput/SearchInput'
import OrderCard from '../../../components/orderCard/OrderCard'
/* const destinations = [
    {
        "address": "Perif. Blvd. Manuel Ávila Camacho 3130, Valle Dorado, 54020 Tlalnepantla de Baz, Méx., Mexico",
        "start_date": 1649193900000,
        "end_date": 1649193900000,
        "nickname": "Recolección",
        "show_navigation": true
    },
    {
        "address": "Mariano Matamoros, Sector Centro, 88000 Nuevo Laredo, Tamps., Mexico",
        "start_date": 1649708460000,
        "end_date": 1649708880000,
        "nickname": "Entrega",
        "show_navigation": false
    }
]; */

const urlUpcoming = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming'
const urlOrders = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders'


/* This is a React functional component called `Orders`. It is exporting the component so that it can
be imported and used in other parts of the application. */
export function Orders() {
    const { data: upcomingData, upcomingLoading, upcomingError } = useFetch(urlUpcoming);
    //Los detalles se cargan al cargar todas las ordenes, para evitar un fetch cada que se va a detalles
    const { data: ordersData, ordersLoading, ordersError } = useFetch(urlOrders);
    const [orders, setOrders] = useState([]);
    const [ordersDetails, setOrdersDetails] = useState({})
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        /* This code block is filtering the orders based on the search input value (stored in the
        `filter` state) and setting the filtered orders to the `orders` state. It first checks if
        `upcomingData` exists and if its `status` property is equal to 200 (which means the data was
        fetched successfully). Then it filters the `result` array of `upcomingData` based on whether
        the `order_number` property of each order includes the `filter` value. Finally, it sets the
        filtered orders to the `orders` state using the `setOrders` function. */
        if (upcomingData && upcomingData.status === 200) {
            const filteredOrders = upcomingData.result.filter((order) =>
                order.order_number.includes(filter)
            );
            setOrders(filteredOrders);
        }
    }, [upcomingData, filter]);

    useEffect(() => {
        /* `setOrdersDetails(ordersData)` is setting the state of `ordersDetails` to the value of
        `ordersData`. This is done in the `useEffect` hook that runs whenever `ordersData` changes.
        It is used to store the details of all orders, which are fetched from the `urlOrders`
        endpoint using the `useFetch` hook. The `ordersDetails` state is then passed as a prop to
        the `OrderCard` component, which uses it to display additional information about the order
        when the user clicks on it. */
        setOrdersDetails(ordersData);
    }, [ordersData])

    if (upcomingLoading) {
        console.log('Cargando...', upcomingLoading);
    }

    if (upcomingError) {
        console.log('upcomingError:', upcomingError);
    }

    /**
     * This function navigates the user back to the previous page.
     */
    const handleGoBack = () => {
        navigate('/')
    }

    return (
        <>
            <Header handleNav={handleGoBack} title="Upcoming" />
            {/* Contenido */}
            <Col className='mx-auto' xs={10}>
                <SearchInput
                    label="Buscar"
                    id="searchInput"
                    placeholder="1234562"
                    type={'search'}
                    value={filter}
                    onSearch={setFilter}
                />
            </Col>
            {orders.length > 0 && (
                <Col className='my-card-style mx-auto pb-5' xs={10}>
                    {orders.map((order, index) => (
                        <OrderCard
                            key={order.order_number}
                            orderNo={order.order_number}
                            type={order.type}
                            status={order.status}
                            statusClass={order.status_class}
                            statusString={order.status_string}
                            destinations={order.destinations}
                            startTimeMili={order.start_date}
                            endTimeMili={order.end_date}
                            ordersData={ordersDetails}
                            index={index}
                        />
                    ))}
                </Col>
            )}
        </>
    );
}

