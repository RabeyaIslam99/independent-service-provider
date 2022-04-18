import React from 'react';
import { Link } from 'react-router-dom';
import fouOfour from '../../images/jisunpark_404-error.gif'
const NotFound = () => {
    return (
        <div>
            <img src={fouOfour} alt="" srcset="" style={{width:"1000px" , height:"500px"}} />
            <div><Link to='/'>Back to Home</Link></div>
        </div>
    );
};

export default NotFound;