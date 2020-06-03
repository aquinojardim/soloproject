/* eslint-disable function-paren-newline */
const express = require('express');

const lowCarbController = require('../controllers/lowCarbController');

const router = express.Router();
router.get('/', lowCarbController.getMenuItem, lowCarbController.getRestaurant, lowCarbController.getCity, lowCarbController.getUser,
  (req, res) => {
    res.status(200).json({menuitem: [...res.locals.menuitem], restaurant: [...res.locals.restaurant], city: [...res.locals.city], user: [...res.locals.restaurant]})
  }
);

// router.get('/restaurant',
//   lowCarbController.getRestaurant,
//   (req, res) => {
//     console.log('here', res.locals.restaurant)
//     res.status(200).json(res.locals.restaurant)
//   }
// );

// router.get('/city',
//   lowCarbController.getCity,
//   (req, res) => res.status(200).json(res.locals.city)
// );

// router.get('/user',
//   lowCarbController.getUser,
//   (req, res) => res.status(200).json(res.locals.user)
// );

router.post('/create',
  lowCarbController.addMenuItem,
  (req, res) => res.status(200).json({})
);

module.exports = router;
