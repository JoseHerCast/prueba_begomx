import React, { useState, useEffect } from 'react';

/* This is a functional component in React that renders a notification badge. It takes in a `startTime`
prop, which is a Unix timestamp in milliseconds representing the time when the pickup is scheduled
to start. */
const NotificationBadge = ({ startTime }) => {
    const [timeRemaining, setTimeRemaining] = useState(startTime - Date.now());
    const [badgeClass, setBadgeClass] = useState('');

    useEffect(() => {
        /* This code block is setting up an interval that runs every 1000 milliseconds (1 second) using
        the `setInterval()` function. Within the interval, it calculates the remaining time by
        subtracting the current time (`Date.now()`) from the `startTime` prop passed to the
        component. It then updates the state of `timeRemaining` using the `setTimeRemaining()`
        function. */
        const interval = setInterval(() => {
            const remainingTime = startTime - Date.now();
            console.log(startTime)
            setTimeRemaining(remainingTime);
            if (remainingTime <= 0) {
                clearInterval(interval);
                setBadgeClass('my-noti-bdg-alt');
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [startTime]);

    const formattedTime = formatTime(timeRemaining);

    /**
     * The function logs "Navegar" to the console if the variable badgeClass is not an empty string.
     * @returns If `badgeClass` is an empty string, the function will return without executing the
     * `console.log` statement.
     */
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

/**
 * The function formats a given time into a string in the format of "hh:mm:ss".
 * @returns The function `formatTime` returns a formatted time string in the format of `hh:mm:ss`. The
 * time string is obtained from the input `time` parameter, which is a Unix timestamp in milliseconds.
 * The function converts the timestamp to a `Date` object, extracts the hours, minutes, and seconds
 * from the `Date` object, and formats them into a string with leading zeros using the `
 */
const formatTime = (time) => {
    const date = new Date(time);
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
};

export default NotificationBadge;

