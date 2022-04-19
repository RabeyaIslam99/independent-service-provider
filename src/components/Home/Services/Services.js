
import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

import './Services.css'

const Services = () => {
    const [services] = useServices([])
  
    return (
        <>
        
       <div className='mt-5'>
           
           <h1 className='mb-5'>Our Services</h1>
            <div className='container mapGrid'>
            
            {
                services.slice(0,3).map(service=> <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
       </div>
       </>
    );
};

export default Services;