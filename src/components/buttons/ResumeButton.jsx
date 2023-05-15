import React from 'react'

/**
 * This is a React component that renders a button with a label, icon, and onClick event handler.
 * @returns A React functional component called `ResumeButton` is being returned. It takes three props:
 * `label`, `icon`, and `handleClick`. It returns a button element with the `label` and `icon` props
 * displayed inside it, and an `onClick` event listener that triggers the `handleClick` function when
 * the button is clicked. The button also has a class of `yellow-btn`.
 */
const ResumeButton = ({ label, icon, handleClick }) => {
    return (
        <>
            <button onClick={handleClick} className='yellow-btn'><strong>{label}</strong> {icon}</button>
        </>
    )
}

export default ResumeButton