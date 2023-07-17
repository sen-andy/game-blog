import React, { useEffect, useState } from 'react';
import './alert.css'

const Alert = ({ message }) => {
    const [ isShown, setIsShown ] = useState(false);

    useEffect(() => {
        setIsShown(true);
        setTimeout(() => {
            setIsShown(false);
        }, 3000);
    }, []);

    return (
        <>
        { isShown
            ? <div id="alert"><h2>{message}</h2></div>
            : null
        }
        </>
    )
}

export default Alert;