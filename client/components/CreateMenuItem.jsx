import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

// requiring json data for use in dropdown and checkboxes
// const cityData = require('../data/city.json');
// const menuitemData = require('../data/menuitem.json');
// const restauratData = require('../data/restaurant.json');
// const userData = require('../data/user.json');

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  }
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
}

const CreateMenuItem = props => {
  const [ name, nameOnChange ] = useInput('');
  const [ ingredients, ingredientsOnChange ] = useInput('');
  const [ modifications, modificationsOnChange ] = useInput('');
  const [ restaurant, setRestaurant ] = useState(restauratData[0].name);
  const [ restaurant_id, setRestaurantId ] = useState(restaurantData[0]._id);
  // const [ city, setCity ] = useState(cityData[0].name);
  // const [ city_id, setCitytId ] = useState(cityData[0]._id);
  // const [ userSet, setUserSet ] = useState({});
  const [last_update] = new Date();

  // const handleRestaurantChange = e => {
  //   const idx = e.target.value;
  //   setRestaurant(restaurantData[idx].name);
  //   setRestaurantsId(restaurantData[idx]._id);
  // }

  // const handleCityChange = e => {
  //   const idx = e.target.value;
  //   setCity(cityData[idx].name);
  //   setCityId(cityData[idx]._id);
  // }

  // const handleUserCheck = e => {
  //   const idx = e.target.value;
  //   const newUserSet = {...UserSet};
  //   if (newUserSet[idx]) delete newUserSet[idx];
  //   else newUserSet[idx] = true;
  //   setUserSet(newUserSet);
  // }

  const saveMenuItem = () => {
    // const user = [];
    // for (let idx in userSet) {
    //   user.push({
    //     title: userData[idx].name,
    //     id: userData[idx]._id
    //   })
    // }
    const body = {
      name, 
      price,
      ingredients,
      modifications,
      // restaurant,
      // restaurant_id,
      // city,
      // city_id,
      // user,
      last_update
    }
    fetch('/api/create', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(data => {
      props.history.push('/');
    })
    .catch(err => console.log('CreateMenuItem fetch /api/create: ERROR: ', err));
  }

  // const restauratOptions = restaurantData.map((restaurantObj, idx) => {
  //   return (
  //     <option key={idx} value={idx}>{restaurantObj.name}</option>
  //   )
  // });

  // const cityOptions = cityData.map((cityObj, idx) => {
  //   return (
  //     <option key={idx} value={idx}>{cityObj.name}</option>
  //   )
  // });
  
  // const userCheckboxes = userData.map((userObj, idx) => {
  //   return (
  //     <div key={idx} className="checkboxWithLabel">
  //       <input type="checkbox" className="userCheckbox" value={idx} onChange={handleUserCheck}></input>
  //       <span className="checkboxLabel">{userObj.username}</span>
  //     </div>
  //   )
  // });

  return (
    <section className="mainSection createCharContainer">
      <header className="pageHeader">
          <h2>Menu Item Creator</h2>
          <Link to="/" className="backLink">
            <button type="button" className="btnSecondary">
              Back to full menu
            </button>
          </Link>
        </header>
      <article className="card createChar">
        <h3>Enter your item details</h3>
        <div className="createCharFields">
          <label htmlFor="name">Name: </label>
          <input name="name" placeholder="Menu item Name" value={name} onChange={nameOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="price">Price: </label>
          <input name="price" placeholder="Price od menu item" value={price} onChange={priceOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="ingredients">Ingredients: </label>
          <input name="ingredients" placeholder="ingredients with no carbs" value={ingredients} onChange={ingredientsOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="modifications">Modifications: </label>
          <input name="modifications" placeholder="modifications you had to asked for" value={modifications} onChange={modificationsOnChange} />
        </div>
        {/* <div className="createCharFields">
          <label htmlFor="restaurant">Restaurant: </label>
          <select name="restaurant" id="restaurant-select" onChange={handleRestaurantChange}>
            {restaurantOptions}
          </select>
        </div>
        <div className="createCharFields">
          <label htmlFor="city">City: </label>
          <select name="city" onChange={handleCityChange}>
            {cityOptions}
          </select>
        </div>
        <div className="createCharFields">
          <label htmlFor="User">Do you want to recommend this item?: </label>
          <div className="userCheckboxContainer">
            {userCheckboxes}
          </div>
        </div> */}
        <div className="createCharButtonContainer">
          <Link to="/" className="backLink">
            <button type="button" className="btnSecondary">
              Cancel
            </button>
          </Link>
          <button type="button" className="btnMain" onClick={saveMenuItem}>Save</button>
        </div>
      </article>
    </section>
  )
}

export default withRouter(CreateMenuItem);