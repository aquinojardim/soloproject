/* eslint-disable function-paren-newline */
const express = require('express');

const lowCarbController = require('../controllers/lowCarbController');

const router = express.Router();
console.log("in api router")
router.get('/',
  lowCarbController.getMenuItem,
  (req, res) => {
    console.log(res.locals.menuitem)
    res.status(200).json([res.locals.menuitem])
  }
  // test
  // (req, res) => {
  //   console.log("in get")
  //   res.status(200).send('on the get response')
  // }
);

router.get('/restaurant',
  lowCarbController.getRestaurant,
  (req, res) => res.status(200).json({})
);

router.get('/city',
  lowCarbController.getCity,
  (req, res) => res.status(200).json({})
);

router.get('/user',
  lowCarbController.getUser,
  (req, res) => res.status(200).json({})
);

router.post('/create',
  lowCarbController.addMenuItem,
  (req, res) => res.status(200).json({})
);

module.exports = router;
