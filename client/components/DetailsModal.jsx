import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const restaurantModal = ({ type, position, name, allData, closeModal }) => {
  const [ details, setDetails ] = useState({});
  const [ isLoaded, setIsLoaded ] = useState(true);

  useEffect(()=>{
    if (name) {
      setIsLoaded(true);
      for( let object of allData[type]){
        if(object.name === name){
          setDetails(object)
          setIsLoaded(false);
        }
      }
    } else {
      setDetails({name: 'Unavailable'});
      setIsLoaded(false);
    }
  }, [name, type, allData]);

  if (isLoaded) {
    return (
      <div className="modal" style={position}>
        <p>Loading restaurant data...</p>
      </div>
    );
  }

  let info;
  switch(type) {
    case 'restaurant':
      const { name, streetnumber, streetaddress, city, zipcode, phone, website, deliver} = details;
      info = (
        <ul className="modalList">
          <li className="modalDetail">Name: {name}</li>
          <li className="modalDetail">Address: {streetnumber}, {streetaddress}, {city}, {zipcode}</li>
          <li className="modalDetail">Phone: {phone}</li>
          <li className="modalDetail">Website: <a href={website}>{website}</a></li>
          <li className="modalDetail">Deliver: {deliver}</li>
        </ul>
      );
      break;
    default:
      info = (<p>Unexpected modal type</p>);
  }

  return (
    <div className="modal" style={position}>
      <div className="modalHeading">
        <h4 className="modalName">{details.name || "Unknown"}</h4>
        <FAIcon icon={faTimes} onClick={closeModal} />
      </div>
      {info}
    </div>
  )
}

export default restaurantModal;