// user input for search
var userInput = document.querySelector('.');
var savedRecipes = document.getElementById('savedRecipes');
var randomMeal = document.getElementById('randomMeal');
var foodRecipes = document.getElementById('foodRecipes');
var drinkRecipes = document.getElementById('drinkRecipes');
var listOfFood = [];
var listOfDrinks = [];

// function to save items
var savedItems = function (){

}
// function to get a random meal
var randomMealFunction = function (){

}
  // fetch function
  // fetch for food
var foodItem = function (food){
  fetch('URLfor food')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => alert("Incorrect food item!"));
}
  // fetch for drinks
var drinkItem = function (drink){
  fetch('URLfod drinks')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => alert("Incorrect drink item!"));
}
  // fetch for both 

  // create cards for items

  // local storage for saved recipes
  listOfFood = JSON.parse(localStorage.getItem("food"));
  listOfDrinks = JSON.parse(localStorage.getItem("drinks"));
  window.localStorage.setItem("food", JSON.stringify(listOfFood));
  window.localStorage.setItem("drinks", JSON.stringify(listOfDrinks));

  randomMeal.addEventListener('click',randomMealFunction);
savedRecipes.addEventListener('click',savedItems);
  foodRecipes.addEventListener('click', foodItem);
  drinkRecipess.addEventListener('click', drinkItem);
  