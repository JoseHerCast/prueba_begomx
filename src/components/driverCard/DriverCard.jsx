import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'

const DriverCard = ({ driverImg, time, checkIcon, steps, handleClick }) => {
    const [disableButton, setDisableButton] = useState(true);
    useEffect(() => {
        if (steps) {
            steps[3].active && setDisableButton(false)
        }
    }, [steps])
    return (
        <div className="mb-5 driver-card">
            <div className="upper-container">
                <span className="position-relative rounded-circle image-container-ext">
                    <span className="rounded-circle image-container-int">
                        <Image src={driverImg} />
                    </span>
                </span>
            </div>
            <div className=" d-flex flex-column justify-content-between pt-3 lower-container">
                <div className="pt-5 fs-5 lower-container-header">
                    <p>
                        <strong>{time}</strong>
                    </p>
                </div>
                <div className="lower-container-body pt-3 px-2">
                    <ol className="c-stepper">
                        {steps.map((step, index) => (
                            <li key={index} className="c-stepper-item">
                                {/* Befor item */}
                                <div className='d-flex flex-column align-items-center'>
                                    <span className={`c-stepper-item-before ${step.active ? 'c-stepper-item-before-check' : 'c-stepper-item-before-pending-ext'}`}>
                                        {step.active ? (
                                            <Image src={checkIcon} />
                                        ) : (
                                            <span className="d-flex justify-content-center rounded-circle c-stepper-item-before-pending-int">
                                                <span className="d-block rounded-circle align-self-center c-stepper-item-before-pending-child"></span>
                                            </span>
                                        )}
                                    </span>
                                    {(index < steps.length - 1) && <span className={`c-stepper-bar ${step.active ? 'c-stepper-bar-active' : 'c-stepper-bar-pending'}`}></span>}
                                </div>
                                {/* Text item */}
                                <div className="c-stepper__content">
                                    <p className={`${step.active ? 'c-stepper-text-active' : 'c-stepper-text-pending'}`}>
                                        <strong>{step.status}</strong>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="d-flex align-items-end lower-container-footer">
                    <button onClick={handleClick} className='track-button' disabled={disableButton}>Track Order</button>
                </div>
            </div>
        </div>
    );
};


export default DriverCard