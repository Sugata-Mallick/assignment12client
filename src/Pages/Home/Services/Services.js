import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
  import './Services.css';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://pacific-hollows-59119.herokuapp.com/services')

            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h2 className="text-primary mb-3 mt-4 text-primary"> Cars</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;