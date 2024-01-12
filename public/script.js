
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

var alcDrinks = [
  {name: "Margarita", ingredients: ["Tequila", "Triple sec", "Lime juice", "Salt"], calories: 550},
  {name: "Martini", ingredients: ["Gin", "Dry vermouth", "Lemon twist"], calories: 210},
  {name: "Piña Colada", ingredients: ["White rum", "Coconut cream", "Pineapple juice"], calories: 490},
  {name: "Mojito", ingredients: ["White rum", "Lime", "Mint", "Simple syrup", "Soda water"], calories: 160},
  {name: "Old Fashioned", ingredients: ["Bourbon", "Angostura bitters", "Simple syrup", "Orange twist"], calories: 155},
  {name: "Cosmopolitan", ingredients: ["Vodka", "Triple sec", "Cranberry juice", "Lime juice"], calories: 150},
  {name: "Whiskey Sour", ingredients: ["Bourbon", "Lemon juice", "Simple syrup", "Cherry"], calories: 200},
  { name: "Negroni", ingredients: ["Gin", "Campari", "Sweet vermouth"], calories: 220 },
  { name: "Espresso Martini", ingredients: ["Vodka", "Coffee liqueur", "Espresso", "Simple syrup"], calories: 280 },
  { name: "Daiquiri", ingredients: ["White rum", "Lime juice", "Simple syrup"], calories: 200 },
  { name: "Long Island Iced Tea", ingredients: ["Vodka", "Tequila", "Rum", "Gin", "Triple sec", "Lemon juice", "Simple syrup", "Cola"], calories: 280 },
  { name: "Sazerac", ingredients: ["Rye whiskey", "Absinthe", "Peychaud's bitters", "Sugar cube", "Lemon twist"], calories: 175 },
  { name: "White Russian", ingredients: ["Vodka", "Coffee liqueur", "Heavy cream"], calories: 425 },
  { name: "Tom Collins", ingredients: ["Gin", "Lemon juice", "Simple syrup", "Soda water"], calories: 185 }
];

const meals = [
  { name: "Spaghetti Bolognese", ingredients: ["Ground beef", "Tomato sauce", "Onion", "Garlic", "Spaghetti", "Olive oil"], calories: 600 },
  { name: "Chicken Alfredo", ingredients: ["Chicken breast", "Alfredo sauce", "Fettuccine pasta", "Parmesan cheese"], calories: 800 },
  { name: "Vegetarian Stir Fry", ingredients: ["Tofu", "Broccoli", "Carrots", "Bell peppers", "Soy sauce", "Ginger", "Garlic"], calories: 450 },
  { name: "Salmon with Lemon-Dill Sauce", ingredients: ["Salmon fillet", "Lemon", "Dill", "Olive oil", "Salt", "Pepper"], calories: 550 },
  { name: "Shrimp and Avocado Salad", ingredients: ["Shrimp", "Avocado", "Lettuce", "Cherry tomatoes", "Lemon", "Olive oil"], calories: 400 },
  { name: "Beef Tacos", ingredients: ["Ground beef", "Taco shells", "Lettuce", "Tomato", "Cheese", "Salsa"], calories: 480 },
  { name: "Vegetable Curry", ingredients: ["Mixed vegetables", "Coconut milk", "Curry paste", "Rice"], calories: 600 },
  { name: "Grilled Chicken Caesar Salad", ingredients: ["Chicken breast", "Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"], calories: 350 },
  { name: "Pasta Primavera", ingredients: ["Pasta", "Mixed vegetables", "Olive oil", "Garlic", "Parmesan cheese"], calories: 550 },
  { name: "Teriyaki Salmon", ingredients: ["Salmon fillet", "Teriyaki sauce", "Broccoli", "Rice"], calories: 700 },
  { name: "Caprese Salad", ingredients: ["Tomato", "Mozzarella cheese", "Basil", "Balsamic glaze"], calories: 300 },
  { name: "Chicken Parmesan", ingredients: ["Chicken breast", "Tomato sauce", "Mozzarella cheese", "Parmesan cheese", "Pasta"], calories: 800 },
  { name: "Spinach and Feta Stuffed Chicken", ingredients: ["Chicken breast", "Spinach", "Feta cheese", "Garlic", "Olive oil"], calories: 600 },
  { name: "Quinoa Salad with Chickpeas", ingredients: ["Quinoa", "Chickpeas", "Cucumber", "Cherry tomatoes", "Feta cheese", "Olive oil"], calories: 450 }
];

// function to get a random meal
function getRandomDrink(drinksArray) {
  const randomIndex = Math.floor(Math.random() * drinksArray.length);
  return drinksArray[randomIndex];
}

function displayRandomDrink() {
  const randomDrink = getRandomDrink(alcDrinks);
  const randomFood = getRandomDrink(meals);

  // Get the result text element and update its content
  const resultTextElement = document.getElementById("resultText");
  resultTextElement.innerHTML = `
    <strong>Drink name:</strong> ${randomDrink.name} <br>
    <strong>Ingredients:</strong> ${randomDrink.ingredients.join(', ')} <br>
    <strong>Calories:</strong> ${randomDrink.calories} cal
  `
  const resultMealElement = document.getElementById("resultMeal");
  resultMealElement.innerHTML = `
    <strong>Meal name: </strong> ${randomFood.name} <br>
    <strong>Ingredients:</strong> ${randomFood.ingredients.join(', ')} <br>
    <strong>Calories:</strong> ${randomMeal.calories} cal
  `
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


  randomMeal.addEventListener('click',displayRandomDrink);
  savedRecipes.addEventListener('click',savedItems);

  randomMeal.addEventListener('click',randomMealFunction);
  savedRecipes.addEventListener('click',savedItems);

  foodRecipes.addEventListener('click', foodItem);
  drinkRecipes.addEventListener('click', drinkItem);
