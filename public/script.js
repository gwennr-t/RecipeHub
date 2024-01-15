// user input for search
var userInput = document.querySelector('#searchInput');

var savedRecipes = document.getElementById('savedRecipes');
var randomMeal = document.getElementById('randomMeal');
var foodRecipes = document.getElementById('foodRecipes');
var drinkRecipes = document.getElementById('drinkRecipes');
var foodSearch = document.getElementById('foodSearch');
var drinkSearch = document.getElementById('drinkSearch');
var listOfFood = [];
var listOfDrinks = [];
var foodResultContent = document.getElementById('food-result-content');
var drinkResultContent = document.getElementById('drink-result-content');

// function to save items
var savedItems = function (){

}

var alcDrinks = [
  { name: "Margarita", ingredients: ["Tequila", "Triple sec", "Lime juice", "Salt"], calories: 200, alcoholic: true, flavorProfile: "Citrus" },
  { name: "Martini", ingredients: ["Gin", "Dry vermouth", "Lemon twist"], calories: 180, alcoholic: true, flavorProfile: "Herbaceous" },
  { name: "Piña Colada", ingredients: ["Rum", "Coconut cream", "Pineapple juice"], calories: 350, alcoholic: true, flavorProfile: "Tropical" },
  { name: "Mojito", ingredients: ["White rum", "Lime", "Mint", "Simple syrup", "Soda water"], calories: 160, alcoholic: true, flavorProfile: "Refreshing" },
  { name: "Shirley Temple", ingredients: ["Ginger ale", "Grenadine", "Maraschino cherry"], calories: 80, alcoholic: false, flavorProfile: "Sweet" },
  { name: "Virgin Mojito", ingredients: ["Lime", "Mint", "Simple syrup", "Soda water"], calories: 100, alcoholic: false, flavorProfile: "Refreshing" },
  { name: "Virgin Piña Colada", ingredients: ["Coconut cream", "Pineapple juice", "Crushed ice"], calories: 250, alcoholic: false, flavorProfile: "Tropical" },
  { name: "Cosmopolitan Mocktail", ingredients: ["Cranberry juice", "Lime juice", "Orange zest", "Soda water"], calories: 120, alcoholic: false, flavorProfile: "Citrusy" },
  { name: "Old Fashioned", ingredients: ["Bourbon", "Simple syrup", "Angostura bitters", "Orange twist"], calories: 180, alcoholic: true, flavorProfile: "Classic" },
  { name: "Mai Tai", ingredients: ["White rum", "Dark rum", "Orange liqueur", "Lime juice", "Orgeat syrup"], calories: 250, alcoholic: true, flavorProfile: "Exotic" },
  { name: "Virgin Mary", ingredients: ["Tomato juice", "Lemon juice", "Worcestershire sauce", "Tabasco", "Celery salt"], calories: 60, alcoholic: false, flavorProfile: "Spicy" },
  { name: "Gin and Tonic", ingredients: ["Gin", "Tonic water", "Lime wedge"], calories: 120, alcoholic: true, flavorProfile: "Crisp" },
  { name: "Lemonade", ingredients: ["Lemon juice", "Simple syrup", "Water"], calories: 100, alcoholic: false, flavorProfile: "Tangy" },
  { name: "Espresso Martini", ingredients: ["Vodka", "Coffee liqueur", "Espresso"], calories: 220, alcoholic: true, flavorProfile: "Bold" }
];

const meals = [
    { name: "Spaghetti Bolognese", ingredients: ["Ground beef", "Tomato sauce", "Onion", "Garlic", "Spaghetti", "Olive oil"], calories: 600, cookingTime: "30 minutes", dairyFree: false, glutenFree: false, servings: 4 },
    { name: "Chicken Alfredo", ingredients: ["Chicken breast", "Alfredo sauce", "Fettuccine pasta", "Parmesan cheese"], calories: 800, cookingTime: "25 minutes", dairyFree: false, glutenFree: false, servings: 2 },
    { name: "Vegetarian Stir Fry", ingredients: ["Tofu", "Broccoli", "Carrots", "Bell peppers", "Soy sauce", "Ginger", "Garlic"], calories: 450, cookingTime: "20 minutes", dairyFree: true, glutenFree: true, servings: 3 },
    { name: "Salmon with Lemon-Dill Sauce", ingredients: ["Salmon fillet", "Lemon", "Dill", "Olive oil", "Salt", "Pepper"], calories: 550, cookingTime: "15 minutes", dairyFree: true, glutenFree: true, servings: 2 },
    { name: "Shrimp and Avocado Salad", ingredients: ["Shrimp", "Avocado", "Lettuce", "Cherry tomatoes", "Lemon", "Olive oil"], calories: 400, cookingTime: "10 minutes", dairyFree: true, glutenFree: true, servings: 2 },
    { name: "Beef Tacos", ingredients: ["Ground beef", "Taco shells", "Lettuce", "Tomato", "Cheese", "Salsa"], calories: 480, cookingTime: "20 minutes", dairyFree: false, glutenFree: false, servings: 3 },
    { name: "Vegetable Curry", ingredients: ["Mixed vegetables", "Coconut milk", "Curry paste", "Rice"], calories: 600, cookingTime: "25 minutes", dairyFree: true, glutenFree: false, servings: 4 },
    { name: "Grilled Chicken Caesar Salad", ingredients: ["Chicken breast", "Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"], calories: 350, cookingTime: "15 minutes", dairyFree: false, glutenFree: true, servings: 2 },
    { name: "Pasta Primavera", ingredients: ["Pasta", "Mixed vegetables", "Olive oil", "Garlic", "Parmesan cheese"], calories: 550, cookingTime: "20 minutes", dairyFree: true, glutenFree: false, servings: 4 },
    { name: "Teriyaki Salmon", ingredients: ["Salmon fillet", "Teriyaki sauce", "Broccoli", "Rice"], calories: 700, cookingTime: "18 minutes", dairyFree: true, glutenFree: true, servings: 2 },
    { name: "Caprese Salad", ingredients: ["Tomato", "Mozzarella cheese", "Basil", "Balsamic glaze"], calories: 300, cookingTime: "10 minutes", dairyFree: true, glutenFree: true, servings: 2 },
    { name: "Chicken Parmesan", ingredients: ["Chicken breast", "Tomato sauce", "Mozzarella cheese", "Parmesan cheese", "Pasta"], calories: 800, cookingTime: "30 minutes", dairyFree: false, glutenFree: false, servings: 3 },
    { name: "Spinach and Feta Stuffed Chicken", ingredients: ["Chicken breast", "Spinach", "Feta cheese", "Garlic", "Olive oil"], calories: 600, cookingTime: "25 minutes", dairyFree: false, glutenFree: true, servings: 2 },
    { name: "Quinoa Salad with Chickpeas", ingredients: ["Quinoa", "Chickpeas", "Cucumber", "Cherry tomatoes", "Feta cheese", "Olive oil"], calories: 450, cookingTime: "15 minutes", dairyFree: true, glutenFree: true, servings: 3 }
];

// function to get a random meal
function getRandomDrink(drinksArray) {
  const randomIndex = Math.floor(Math.random() * drinksArray.length);
  return drinksArray[randomIndex];
}

function displayRandomDrink() {
  const randomDrink = getRandomDrink(alcDrinks);
  const randomFood = getRandomDrink(meals);

  const modalTitle = document.getElementById('modalTitle');
  const modalCalories = document.getElementById('modalCalories');
  const modalServing = document.getElementById('modalServing');
  const modalDairy = document.getElementById('modalDairy');
  const modalGluten = document.getElementById('modalGluten');
  const modalTime = document.getElementById('modalTime');
  const drinkTitle = document.getElementById('drinkTitle');
  const drinkIngredients = document.getElementById('drinkIngredients');
  const drinkAlc = document.getElementById('drinkAlc');
  const drinkFlavor = document.getElementById('drinkFlavor');
  const drinkCalories = document.getElementById('drinkCalories');
  modalTitle.innerHTML = `${randomFood.name}`
  modalCalories.innerHTML = `Calories: ${randomFood.calories}`
  modalServing.innerHTML = `Servings: ${randomFood.servings}`
  modalTime.innerHTML = `Cooking time: ${randomFood.cookingTime}`
  modalDairy.innerHTML = `Dairy-free: ${randomFood.dairyFree}`
  modalGluten.innerHTML = `Gluten-free: ${randomFood.glutenFree}`
  drinkTitle.innerHTML = `${randomDrink.name}`
  drinkIngredients.innerHTML = `Ingredients: ${randomDrink.ingredients.join(', ')}`
  drinkAlc.innerHTML = `Alcoholic: ${randomDrink.alcoholic}`
  drinkFlavor.innerHTML = `Flavor profile: ${randomDrink.flavorProfile}`
  drinkCalories.innerHTML = `Calories: ${randomDrink.calories}`
}

  // fetch function

  // fetch for food
var foodItem = function (){
  fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=e39ea64b56894c6ea15c430bd91edef5&query=' + userInput.value + '&addRecipeInformation=true')
  .then(response => response.json())
  .then(data => {
    for(var i=0; i<data.results.length; i++){
      
      var titleValue = data['results'][i]['title'];
      var imageValue = data['results'][i]['image'];
      var servingsValue = data['results'][i]['servings'];
      var readyInMinutesValue = data['results'][i]['readyInMinutes'];
      var dairyFreeValue = data['results'][i]['dairyFree'];
      var glutenFreeValue = data['results'][i]['glutenFree'];
      
      // console.log(titleValue);
      console.log(imageValue);
      // console.log(servingsValue);
      // console.log(readyInMinutesValue);
      // console.log(dairyFreeValue);
      // console.log(glutenFreeValue);

      function printResults () {

        var foodCard = document.createElement('div');
        foodCard.classList.add('food-card')
    
        var foodBody = document.createElement('div');
        foodBody.classList.add('food-body');
        foodCard.append(foodBody);
    
        var bodyContent = document.createElement('p');
    
        bodyContent.innerHTML = '<strong>Name: </strong>' + titleValue + '<br/>' + '<img src= "' + imageValue + '"/>' + '<br/>' + '<strong>Servings: </strong>' + servingsValue + '<br/>' + '<strong>Ready In: </strong>' + readyInMinutesValue + ' minutes' + '<br/>' +'<strong>Dairy Free: </strong>' + dairyFreeValue + '<br/>' + '<strong>Gluten Free: </strong>' + glutenFreeValue
    
        foodBody.append(bodyContent);
        foodResultContent.append(foodCard);
      }
      printResults();
    }
  })
  .catch(err => alert("Incorrect food item!"));
}
  // fetch for drinks
var drinkItem = function (){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput.value)
  .then(response => response.json())
  .then(data => {
    for(var i=0; i<data.drinks.length; i ++){

      var nameValue = data['drinks'][i]['strDrink'];
      var thumbValue = data['drinks'][i]['strDrinkThumb'];
      // console.log(nameValue);
      // console.log(thumbValue);

      function printDrinkResults () {

        var drinkCard = document.createElement('div');
        drinkCard.classList.add('drink-card')
    
        var drinkBody = document.createElement('div');
        drinkBody.classList.add('drink-body');
        drinkCard.append(drinkBody);
    
        var drinkBodyContent = document.createElement('p');
    
        drinkBodyContent.innerHTML = '<strong>Name: </strong>' + nameValue + '<br/>' + '<img src=' + thumbValue + '/>'
    
        drinkBody.append(drinkBodyContent);
        drinkResultContent.append(drinkCard);
      }
      printDrinkResults();
    }
    
  })
  .catch(err => alert("Incorrect drink item!"));
}
 
  // local storage for saved recipes
  listOfFood = JSON.parse(localStorage.getItem("food"));
  listOfDrinks = JSON.parse(localStorage.getItem("drinks"));
  window.localStorage.setItem("food", JSON.stringify(listOfFood));
  window.localStorage.setItem("drinks", JSON.stringify(listOfDrinks));


  randomMeal.addEventListener('click',displayRandomDrink);
  savedRecipes.addEventListener('click',savedItems);


  // randomMeal.addEventListener('click',randomMealFunction);
  savedRecipes.addEventListener('click',savedItems);

  foodSearch.addEventListener('click', foodItem);

  drinkRecipes.addEventListener('click', drinkItem);
