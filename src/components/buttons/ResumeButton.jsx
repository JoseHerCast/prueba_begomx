import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const ResumeButton = ({ label, icon, handleClick }) => {
    return (
        <>
            <button onClick={handleClick} className='yellow-btn'><strong>{label}</strong> {icon}</button>
        </>
    )
}

export default ResumeButton