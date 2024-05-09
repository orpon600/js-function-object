//arry VS objet
// arry
var shoppingItem = ["book", "sunglass", "shoes", "pen"];
var friendsAge = [12, 45, 78, 32, 14];

// Object
var friendsAge = {
  rahim: 12,
  samad: 45,
  oggy: 16,
  jack: 18,
  olley: 15,
  bob: 19,
};
var shoppingCart = {
  books: 3,
  sunglass: 1,
  krybord: 5,
  mouse: 1,
  pen: 15,
  shoes: 2,
};

const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);

//var keys = ["book", "sunglass", "shoes", "pen"];
for (var i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertyValue = shoppingCart[propertyName];
  console.log(propertyName, propertyValue);
}

//for in loop
for (var propertyName in shoppingCart) {
  const value = shoppingCart[propertyName];
  console.log(propertyName, value);
}
