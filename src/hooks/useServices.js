import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setDetails] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    return (
        services

    );
};

export default useServices;