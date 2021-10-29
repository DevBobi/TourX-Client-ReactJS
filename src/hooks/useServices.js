import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setDetails] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    return (
        services

    );
};

export default useServices;