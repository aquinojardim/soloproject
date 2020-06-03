const models = require('../models/lowCarbModels');
const fs = require('fs');
const path = require('path');

const lowCarbController = {};

lowCarbController.getMenuItem = (req, res, next) => {
  models.MenuItem.find({}).exec()
  .then(arr => {
    res.locals.menuitem = arr;
    return next()
  })
  .catch(err => next(err))
}

// lowCarbController.getRestaurant = (req, res, next) => {
//   const id = req.query.id;
//   console.log("this is restuarant id",id)
//   models.Restaurant.findById(Id).exec()
//   .then(result => {
//     console.log(result)
//     res.locals.restaurant = result;
//     return next()
//   })
//   .catch(err => next(err))
// }

lowCarbController.getRestaurant = (req, res, next) => {
  models.Restaurant.find({}).exec()
  .then(arr => {
    res.locals.restaurant = arr;
    return next()
  })
  .catch(err => next(err))
}

// lowCarbController.getCity = (req, res, next) => {
//   const id = req.query.id;
//   models.City.findById(Id).exec()
//   .then(result => {
//     console.log(result)
//     res.locals.city = result;
//     return next()
//   })
//   .catch(err => next(err))
// }

lowCarbController.getCity = (req, res, next) => {
  models.City.find({}).exec()
  .then(arr => {
    res.locals.city = arr;
    return next()
  })
  .catch(err => next(err))
}

// lowCarbController.getUser = (req, res, next) => {
//   const id = req.query.id;
//   models.User.findById(id).exec()
//     .then(result =>{
//       res.locals.user = result;
//       return next()
//     })
//     .catch(err => {
//       return next(err)
//     })
// }

lowCarbController.getUser = (req, res, next) => {
  models.User.find({}).exec()
  .then(arr => {
    res.locals.user = arr;
    return next()
  })
  .catch(err => next(err))
}

lowCarbController.addMenuItem = (req, res, next) => {
  // const newMenuItem = new models.MenuItem({
  //   name,
  //   price,
  //   ingredients,
  //   modifications,
  //   last_update,
  // });

  // newMenuItem
  //   .save()
  //   .then((result) => {
  //     console.log(`successfully added: ${result}`);
  //     return next();
  //   })
  //   .catch((err) => {
  //     return next({
  //       log: "Error in lowCarbontroller.addMenuItem",
  //       message: { error: `This is an error ${err}` },
  //     });
  //   });
}

module.exports = lowCarbController;
