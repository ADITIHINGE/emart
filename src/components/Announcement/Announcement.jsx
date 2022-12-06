import React from 'react';
  
const Announcement = () => {
    
    const Container ={height: '30',
        backgroundColor: 'teal',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
    justifyContent: 'center',
        fontSize: 14,
        fontWeight: 500}

  return (
    <div style={Container}>Super Deal! Free Shipping on Orders Over ₹500</div>
  )
}

export default Announcement;