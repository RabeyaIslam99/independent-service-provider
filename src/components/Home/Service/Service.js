import React from 'react'; import { Button } from 'react-bootstrap';
 import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
  
    const{id ,image ,description, title,price } = service
    const url = `/appointed/${id}`
    
    return (
        <div>
           
            <div className="cards">
            <div className="card-content">
                 <div className="card-body"> <img style={{height:'100'}}  className="img img-fluid" src={image} alt=''/> 
                   
                    <div className="card-title">{title}</div>
                    { <div className="card-subtitle">
                        <p> <small className="text-muted">{description}</small> </p>
                    </div> }
                    <p>Price:{price}</p>
                    { <Link to={url}><Button style={{backgroundColor:'#8dd1fe' , color:'dark' , border:'none'}}>Take an Appointment</Button></Link> }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Service;