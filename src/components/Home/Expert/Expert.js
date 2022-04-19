import React from 'react';
import './Expert.css'

const Expert = () => {

 
    
    return (
        
        <div  className='container mapGridE  '>
           
   <div className='container ms-4 mb-3'>
      
        <div  style={{backgroundColor:'#8dd1fe'}} className="profile ">
        <div className="image"> <img style={{height:300 , width:300}} src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80" alt=''/> </div>
        <div className="content "> <span>Jhon </span> <span>Best in all category</span> </div>
    </div>
   </div>
   <div className='container ms-4 mb-3'>
        <div  style={{backgroundColor:'#8dd1fe'}} className="profile ">
        <div className="image"> <img style={{height:300 , width:300}} src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=''/> </div>
        <div className="content "> <span>William</span> <span>Best in wedding photography</span> </div>
    </div>
   </div>
   <div className='container ms-4 mb-3'>
        <div  style={{backgroundColor:'#8dd1fe'}} className="profile ">
        <div className="image"> <img style={{height:300 , width:300}} src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=''/> </div>
        <div className="content "> <span>Alex</span> <span>Best in WIld life</span> </div>
    </div>
   </div>
   </div>

    );
};

export default Expert;