const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://aquinojardim:test@cluster0-2z5vl.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
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

const userSchema = new Schema({
  username: {type: String, required: true,},
  password: {type: String, required: true,},
  email: {type: String, required: true,},
  firstname: String,
  lastname: String,
  birthday: Date,
  badge: {type: String, required: true,},
  city: {
    city: String,
    city_id:{
      type: Schema.Types.ObjectId,
      ref: 'city'
  }},
  menuitem: [{
    menuitem: String,
    menuitem_id:{
      type: Schema.Types.ObjectId,
      ref: 'menuitem',
  }}],
})


const User = mongoose.model('user', userSchema);

const restaurantSchema = new Schema({
  name: {type: String, required: true,},
  street_number: {type: Number, required: true,},
  street_address: {type: String, required: true,},
  city: {
  city: {type: String, required: true,},
  city_id:{
    type: Schema.Types.ObjectId,
    ref: 'city'
  }},
  zipcode: {type: Number, required: true,},
  phone: String,
  website: String,
  deliver: String,
  menuitem: [{
    menuiten: String,
    menuitem_id:{
      type: Schema.Types.ObjectId,
      ref: 'menuitem',
  }}],
  last_update: Date,
})


const Restaurant = mongoose.model('restaurant', restaurantSchema);

const menuItemSchema = new Schema({
  name: {type: String, required: true,},
  price: String,
  ingredients: {type: String, required: true,},
  modifications: {type: String, required: true,},
  restaurant: {
    restaurant: String, 
    restaurant_id: {
      type: Schema.Types.ObjectId,
      ref: 'restaurant',
  }},
  city: {
    city: String, 
    city_id: {
      type: Schema.Types.ObjectId,
      ref: 'city',
  }},
  user: [{
    username: String, 
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'user',
  }}],
  last_update: Date,
})


const MenuItem = mongoose.model('menuItem', menuItemSchema);

module.exports = {
  City,
  User,
  Restaurant,
  MenuItem,
}
