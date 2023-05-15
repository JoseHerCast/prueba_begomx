import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Orders as CargoOrders } from './pages/cargo/views/Orders';
import { Details as CargoDetails } from './pages/cargo/views/Details';
import { CargoProvider } from './providers/CargoProvider';
import NoPage from './pages/noPage/views/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css"
import './pages/noPage/views/noPage.css';
import './components/orderCard/orderCard.css';
import './components/detailsCard/detailsCard.css';
import './components/driverCard/driverCard.css';
import './components/detailsExpandable/detailsExpandable.css';
import './components/searchInput/searchInput.css';
import './components/buttons/resumeButton.css';
import './components/notificationBadge/notificationBadge.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <CargoProvider>
          <Routes>
            <Route index element={<CargoOrders />} />
            <Route path='/cargo-orders' element={<CargoOrders />} />
            <Route path='/cargo-details' element={<CargoDetails />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </CargoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
