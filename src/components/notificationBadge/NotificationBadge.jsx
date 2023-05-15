import React, { useState, useEffect } from 'react';

const NotificationBadge = ({ startTime }) => {
    const [timeRemaining, setTimeRemaining] = useState(startTime - Date.now());
    const [badgeClass, setBadgeClass] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const remainingTime = startTime - Date.now();
            setTimeRemaining(remainingTime);
            if (remainingTime >= 0) {
                clearInterval(interval);
                setBadgeClass('my-noti-bdg-alt');
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [startTime]);

    const formattedTime = formatTime(timeRemaining);

    const handleClick = () => {
        if (badgeClass === '')
            return;
        console.log("Navegar");
    }

    return (
        <span onClick={handleClick} className={`my-noti-bdg ${badgeClass}`} >
            <p className='text-center'>
                {badgeClass === '' ?
                    <strong>Start pickup in <span className='time-bdg'>{formattedTime}</span></strong> :
                    <strong>Its time for pickup</strong>
                }
            </p>
        </span >
    );
};

const formatTime = (time) => {
    const date = new Date(time);
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
};

export default NotificationBadge;

