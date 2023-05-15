import React, { useEffect } from "react";
import { useLocation } from "react-router";


const ScrollRestore = ({ childre }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{children}</>
}

export default ScrollRestore