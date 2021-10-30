import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://gentle-island-49422.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    return (
        services

    );
};

export default useServices;