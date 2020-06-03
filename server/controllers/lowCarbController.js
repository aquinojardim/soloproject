const models = require('../models/lowCarbModels');
console.log("this is models=>" , models)

const lowCarbController = {};

lowCarbController.getMenuItem = (req, res, next) => {
  console.log("in the lowCarbController.getMenuItem")
  models.MenuItem.find({}).exec()
  .then(arr => {
    console.log("this is arr" , arr)
    res.locals.menuitem = arr;
    return next()
  })
  .catch(err => next(err))
}

lowCarbController.getRestaurant = (req, res, next) => {
  models.Restaurant.find({}).exec()
  .then(arr => {
    console.log(arr)
    res.locals.restaurant = arr;
    return next()
  })
  .catch(err => next(err))
}

lowCarbController.getCity = (req, res, next) => {
  models.City.find({}).exec()
  .then(arr => {
    console.log(arr)
    res.locals.city = arr;
    return next()
  })
  .catch(err => next(err))
}

lowCarbController.getUser = (req, res, next) => {
  const _id = req.query.id;
  models.User.findById({ _id }).exec()
    .then(userDoc =>{
      res.locals.user = userDoc;
      return next()
    })
    .catch(err => {
      return next(err)
    })
}

lowCarbController.addMenuItem = (req, res, next) => {
  // write code here

  next();
}

module.exports = lowCarbController;
