import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const restaurantModal = ({ type, position, id, closeModal }) => {
  const [ details, setDetails ] = useState({});
  const [ isFetching, setIsFetching ] = useState(true);

  useEffect(()=>{
    if (id) {
      setIsFetching(true);
      fetch(`/api/${type}?id=${id}`)
        .then(resp => resp.json())
        .then(data => {
          setDetails(data);
          setIsFetching(false);
        })
        .catch(err => console.log('DetailsModal: fetch /api: ERROR: ', err));
    } else {
      setDetails({name: 'Unavailable'});
      setIsFetching(false);
    }
  }, [id, type]);

  if (isFetching) {
    return (
      <div className="modal" style={position}>
        <p>Fetching restaurant data...</p>
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