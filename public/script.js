
// user input for search
// var userInput = document.querySelector('.');
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
var foodItem = function (){
  fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=e39ea64b56894c6ea15c430bd91edef5&query=' + 'fish' + '&addRecipeInformation=true')
  .then(response => response.json())
  .then(data => {
    for(var i=0; i<data.results.length; i++){
      var item = {}
      item.titleValue = data['results'][i]['title'];
      item.imageValue = data['results'][i]['image'];
      item.servingsValue = data['results'][i]['servings'];
      item.readyInMinutesValue = data['results'][i]['readyInMinutes'];
      item.dairyFreeValue = data['results'][i]['dairyFree'];
      item.glutenFreeValue = data['results'][i]['glutenFree'];
      item.descriptionValue = data['results'][i]['summary'];
      console.log(item);
    }
  })
  .catch(err => alert("Incorrect food item!"));
}
  // fetch for drinks
var drinkItem = function (){
  fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput)
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
  drinkRecipes.addEventListener('click', drinkItem);
