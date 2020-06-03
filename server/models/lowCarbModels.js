const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://keith:keith123@cluster0-4kdlf.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(MONGO_URI || 'mongodb://localhost/lowcarb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'lowcarb'
})
.then(()=>console.log('Connected to Mongo DB.'))
.catch(err=>console.log(err));


const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  state: String,
  restaurant: [{
    restaurant: String, 
    restaurant_id: {
      type: Schema.Types.ObjectId,
      ref: 'restaurant',
  }}],
});

const City = mongoose.model('city', citySchema);

// const losangeles = {
//   name: "Los Angeles",
//   state: "CA"
// };

// const newCity = new City(losangeles);
// newCity.save((error) => {
//   if(error){
//     console.log('New city fail on save')
//   } else {
//     console.log('New city is save')
//   }
// });

const userSchema = new Schema({
  username: {type: String, required: true,},
  password: {type: String, required: true,},
  email: {type: String, required: true,},
  firstname: String,
  lastname: String,
  birthday: String,
  badge: {type: String, required: true,},
  city: String,
  city_id: {
      type: Schema.Types.ObjectId,
      ref: 'city'
  },
  menuitem: [{
    menuitem: String,
    menuitem_id:{
      type: Schema.Types.ObjectId,
      ref: 'menuitem',
  }}],
})

const User = mongoose.model('user', userSchema);

// const drthelma = {
//   username: 'Dr. Thelma',
//   password: '123',
//   email: 'aquinojardim@hotmail.com',
//   firstname: 'Thelma',
//   lastname: 'Dorta',
//   birthday: '04-06',
//   badge: 'Health Professional',
//   city: 'Los Angeles'
// };

// const newUser = new User (drthelma);
// newUser.save((error) => {
//   if(error){
//     console.log('New user fail on save')
//   } else {
//     console.log('New user is save')
//   }
// });

const restaurantSchema = new Schema({
  name: {type: String, required: true,},
  streetnumber: Number,
  streetaddress: String,
  city: String,
  city_id:{
    type: Schema.Types.ObjectId,
    ref: 'city'
  },
  zipcode: Number,
  phone: String,
  website: String,
  deliver: String,
  menuitem: [{
    menuiten: String,
    menuitem_id:{
      type: Schema.Types.ObjectId,
      ref: 'menuitem',
  }}],
  last_update: String,
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

// const cheesecakefactory = {
//   name: 'Cheesecake Factory',
//   streetnumber: 189,
//   streetaddress: 'The Grove Dr',
//   city: 'Los Angeles',
//   zipcode: 90036,
//   phone: '(323)634-0511',
//   webisite: 'https://www.thecheesecakefactory.com/',
//   deliver: 'yes',
//   last_update: new Date().toISOString().slice(0,10)
// };
  
//   const newRestaurant = new Restaurant (cheesecakefactory);
//   newRestaurant.save((error, saved) => {
//     if(error){
//       console.log('New restaurant fail on save')
//     } else {
//       console.log('New restaurant is save')
//     }
//   });

const menuItemSchema = new Schema({
  name: {type: String, required: true,},
  price: String,
  ingredients: {type: String, required: true,},
  modifications: {type: String, required: true,},
  restaurant: String, 
  restaurant_id: {
    type: Schema.Types.ObjectId,
    ref: 'restaurant',
  },
  city: String, 
  city_id: {
      type: Schema.Types.ObjectId,
      ref: 'city',
  },
  user: [{
    username: String, 
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'user',
  }}],
  last_update: String,
})

const MenuItem = mongoose.model('menuitem', menuItemSchema);

// const cheesecakefactorymenu = {
//   name: 'pan seared branzino with lemon butter',
//   price: '$20.37',
//   ingredients: 'Sauteed branzino Served with cauliflower, asparagus and Lemon'.toLowerCase(),
//   modifications: 'none',
//   restaurant: 'Cheesecake Factory', 
//   city: 'Los Angeles', 
//   last_update: new Date().toISOString().slice(0,10)
// };
    
// const newItem = new MenuItem (cheesecakefactorymenu);
// newItem.save((error) => {
//   if(error){
//     console.log('New menu item fail on save')
//   } else {
//     console.log('New menu item is save')
//   }
// });

module.exports = {
  City,
  User,
  Restaurant,
  MenuItem,
}
