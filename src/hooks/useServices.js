import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        services
    );
};

export default useServices;