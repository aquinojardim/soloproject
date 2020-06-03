import React from 'react';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const menuItemCard = ({
  info, openModal
}) => {
  const {
    name, price, ingredients, modifications, restaurant, city, last_update, user = []} = info;

  // let userData = user.map((user, i) => (
  //   <li key={i} className="menuItemFilm">
  //     - {user.username} <span className="icon"><FAIcon icon={faQuestionCircle} size="xs" style={{color: 'steelBlue'}} onClick={e => openDetailsModal(e, 'user', user.username)} /></span>
  //   </li>
  // ));

  let userData = [1, 2, 3];

  const openDetailsModal = (e, type, name) => {
    const top = e.pageY;
    const left = e.pageX;
    openModal(type, { top, left }, name);
  }

  return (
    <article className="card menuItemCard">
      <div className="menuItemHeadContainer">
        <h3 className="menuItemName">{name}</h3>
      </div>
      <ul className="menuItemDetailsList">
        <li className="menuItemDetail">Price: {price}</li>
         <li className="menuItemDetail">Restaurant: {restaurant} <span className="icon"><FAIcon icon={faQuestionCircle} size="xs" style={{color: 'steelBlue'}} onClick={e => openDetailsModal(e, 'restaurant', restaurant)} /></span>
        </li>
        <li className="menuItemDetail">Ingredients: {ingredients}</li>
        <li className="menuItemDetail">Modifications Required: {modifications}</li>
        <li className="menuItemDetail">Last Update: {last_update}</li>
        <p className="menuItemAddlDetail">Prescriptions:</p>
        <ul className="menuItemUserList">{userData.length}</ul>
      </ul>
    </article>
  );
};

export default menuItemCard;
