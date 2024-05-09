var shoppingCart = {
  books: 3,
  sunglass: 1,
  krybord: 5,
  mouse: 1,
  pen: 15,
};
//when you know the apecific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
//alternative system
//when you know the apecific property name, use dot notation to get the property value
var penCount2 = shoppingCart["pen"];

var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
// console.log(properties);
var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);

console.log(shoppingCart);

// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart["mouse"] = 29;
console.log(shoppingCart);

var propertyName = "mouse";
shoppingCart[propertyName] = 89;
console.log(shoppingCart);
