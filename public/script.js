import drinksData from "./drinksjson.json" assert { type: 'json' };


// user input for search
var userInputFood = document.querySelector('#searchInputFood');
var userInputDrink = document.querySelector('#searchInputDrink');
var randomMeal = $('#randomMeal');
var foodBtn = $('#foodRecipes');
var drinkBtn = $('#drinkRecipes');
var savedRecipes = $('#savedRecipes');
var foodSearchBtn = $('#foodSearch');
var drinkSearchBtn = $('#drinkSearch');

var listOfFood = [];
var listOfDrinks = [];
var foodResultContent = document.getElementById('food-result-content');
var drinkResultContent = document.getElementById('drink-result-content');

const foodContainer = document.querySelector('#spaceForFood');
const drinksContainer = document.createElement("div");
drinksContainer.setAttribute('id', 'spaceForDrinks');
drinksContainer.classList.add('m-10', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4', 'gap-4', 'text-white');

$('#foodSection').addClass("hidden");
$('#drinkSection').addClass("hidden");
$('#savedItemsSection').addClass("hidden");
$('#footer').addClass("hidden");

// function to save items
// var savingTheItem = function (){
//   window.localStorage.setItem("food", JSON.stringify(listOfFood));
// }

// this functions display a random meal and drink in the modal
function displayRandom() {
  $('#randomFoodSpace').innerHTML = "";
  const drinksArr = drinksData.drinks;
  let idx = 0;
  idx = Math.floor(Math.random() * drinksArr.length)
  console.log(drinksArr[idx])
  document.getElementById('drinkTitle').innerHTML = drinksArr[idx].strDrink;
  document.getElementById('drinkImage').src = drinksArr[idx].strDrinkThumb;
  document.getElementById('drinkAlc').innerHTML = "Type: "+drinksArr[idx].strAlcoholic;
  document.getElementById('instructions').innerHTML = "Instructions: "+drinksArr[idx].strInstructions;
  document.getElementById('need').innerHTML = "One ingredient is: "+drinksArr[idx].strIngredient1;
  fetch('https://api.spoonacular.com/recipes/random?number=6&apiKey=c37a2563cdea4ca5ba1ce4b60bd9d8a7')
  .then(response => response.json())
  .then(data => {
  document.getElementById('modalTitle').innerHTML = data['recipes'][0]['title'];
  document.getElementById('modalPic').src = data['recipes'][0]['image'];
  document.getElementById('modalTime').innerHTML = "ReadyInMinutes: " + data['recipes'][0]['readyInMinutes'];
  document.getElementById('modalServing').innerHTML = "Servings: "+data['recipes'][0]['servings'];
  document.getElementById('modalDairy').innerHTML = "DairyFree: "+data['recipes'][0]['dairyFree'];
  document.getElementById('modalGluten').innerHTML = "GlutenFree: "+data['recipes'][0]['glutenFree'];
  document.getElementById('modalData').href=data['recipes'][0]['sourceUrl'] ;
  })
}

// fetch 6 random food items
var randomFoodItems = function (){
  foodContainer.innerHTML = "";
  $('#foodSection').removeClass("hidden");
  $('#footer').removeClass("hidden");
  $('#drinkSection').addClass("hidden");
  $('#savedItemsSection').addClass("hidden");
  fetch('https://api.spoonacular.com/recipes/random?number=6&apiKey=c37a2563cdea4ca5ba1ce4b60bd9d8a7')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for(var i=0;i<6;i++){
      const divCard = document.createElement('div');
      const titleFood = document.createElement("p");
      const image = document.createElement("img");
      const ready = document.createElement("p");
      const servings = document.createElement("p");
      const dairy = document.createElement("p");
      const gluten = document.createElement("p");
      const buttonContainer = document.createElement("div");
      const linkRecipe = document.createElement("a");
      const buttonRecipe = document.createElement("button");
      const buttonSave = document.createElement("button");

      titleFood.setAttribute('id', `titleFood${i}`);
      image.setAttribute('id', `image${i}`);
      ready.setAttribute('id', `ready${i}`);
      servings.setAttribute('id', `servings${i}`);
      dairy.setAttribute('id', `need${i}`);
      gluten.setAttribute('id', `need${i}`);
      buttonContainer.setAttribute('id', `need${i}`);
      buttonRecipe.setAttribute('type', "button");
      buttonSave.setAttribute('type', "button");

      divCard.classList.add("bg-black");
      titleFood.classList.add('border-t', 'w-full', 'text-3xl', 'py-4');
      image.classList.add('px-5', 'h-auto', 'max-w-sm', 'm-auto');
      ready.classList.add('text-left', 'm-10');
      servings.classList.add('text-left', 'm-10');
      dairy.classList.add('text-left', 'm-10');
      gluten.classList.add('text-left', 'm-10');
      buttonContainer.classList.add('flex', 'justify-center', 'items-center', 'p-4', 'md:p-5');
      buttonRecipe.classList.add("text-black", "mr-3", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");
      buttonSave.classList.add("text-black", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");

      // document.getElementById('checkMore'+i).attr = ("href", data['recipes'][i]['sourceUrl']);
      titleFood.innerHTML = data['recipes'][i]['title'];
      image.src = data['recipes'][i]['image'];
      ready.innerHTML = "ReadyInMinutes: " + data['recipes'][i]['readyInMinutes'];
      servings.innerHTML = "Servings: "+data['recipes'][i]['servings'];
      dairy.innerHTML = "DairyFree: "+data['recipes'][i]['dairyFree'];
      gluten.innerHTML = "GlutenFree: "+data['recipes'][i]['glutenFree'];
      linkRecipe.href=data['recipes'][i]['sourceUrl'];
      buttonRecipe.innerHTML='<i class="fa-solid fa-check-to-slot"></i> Check Recipe';
      buttonSave.innerHTML='<i class="fa-solid fa-bookmark"></i> Save Meal';

      divCard.appendChild(titleFood);
      divCard.appendChild(image);
      divCard.appendChild(ready);
      divCard.appendChild(servings);
      divCard.appendChild(dairy);
      divCard.appendChild(gluten);
      
      linkRecipe.appendChild(buttonRecipe);
      buttonContainer.appendChild(linkRecipe);
      buttonContainer.appendChild(buttonSave);
      divCard.appendChild(buttonContainer);

      foodContainer.appendChild(divCard);  
    }
    }
  )
}

// fetch the food items by the user input
var searchFood = function (){
  foodContainer.innerHTML = "";
  fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=c37a2563cdea4ca5ba1ce4b60bd9d8a7git ad&query=' + userInputFood.value + '&addRecipeInformation=true')
  .then(response => response.json())
  .then(data => {
    for(var i=0; i<16; i++){
      const divCard = document.createElement('div');
      const titleFood = document.createElement("p");
      const image = document.createElement("img");
      const ready = document.createElement("p");
      const servings = document.createElement("p");
      const dairy = document.createElement("p");
      const gluten = document.createElement("p");
      const buttonContainer = document.createElement("div");
      const linkRecipe = document.createElement("a");
      const buttonRecipe = document.createElement("button");
      const buttonSave = document.createElement("button");

      titleFood.setAttribute('id', `titleFood${i}`);
      image.setAttribute('id', `image${i}`);
      ready.setAttribute('id', `ready${i}`);
      servings.setAttribute('id', `servings${i}`);
      dairy.setAttribute('id', `need${i}`);
      gluten.setAttribute('id', `need${i}`);
      buttonContainer.setAttribute('id', `need${i}`);
      buttonRecipe.setAttribute('type', "button");
      buttonSave.setAttribute('type', "button");

      divCard.classList.add("bg-black");
      titleFood.classList.add('border-t', 'w-full', 'text-3xl', "py-4");
      image.classList.add('px-5', 'h-auto', 'max-w-sm', 'm-auto');
      ready.classList.add('text-left', 'm-10');
      servings.classList.add('text-left', 'm-10');
      dairy.classList.add('text-left', 'm-10');
      gluten.classList.add('text-left', 'm-10');
      buttonContainer.classList.add('flex', 'justify-center', 'items-center', 'p-4', 'md:p-5');
      buttonRecipe.classList.add("text-black", "mr-3", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");
      buttonSave.classList.add("text-black", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");


      titleFood.innerHTML = data['results'][i]['title'];
      image.src = data['results'][i]['image'];
      ready.innerHTML = "ReadyInMinutes: " + data['results'][i]['readyInMinutes'];
      servings.innerHTML = "Servings: "+data['results'][i]['servings'];
      dairy.innerHTML = "DairyFree: "+data['results'][i]['dairyFree'];
      gluten.innerHTML = "GlutenFree: "+data['results'][i]['glutenFree'];
      linkRecipe.href=data['results'][i]['sourceUrl'];
      buttonRecipe.innerHTML='<i class="fa-solid fa-check-to-slot"></i> Check Recipe';
      buttonSave.innerHTML='<i class="fa-solid fa-bookmark"></i> Save Meal';

      divCard.appendChild(titleFood);
      divCard.appendChild(image);
      divCard.appendChild(ready);
      divCard.appendChild(servings);
      divCard.appendChild(dairy);
      divCard.appendChild(gluten);
      
      linkRecipe.appendChild(buttonRecipe);
      buttonContainer.appendChild(linkRecipe);
      buttonContainer.appendChild(buttonSave);
      divCard.appendChild(buttonContainer);

      foodContainer.appendChild(divCard);  
    }
  })
}

// fetch the 6 random drinks
var randomDrinkItems = function (){
  drinksContainer.innerHTML = "";
  $('#drinkSection').removeClass("hidden");
  $('#footer').removeClass("hidden");
  $('#foodSection').addClass("hidden");
  $('#savedItemsSection').addClass("hidden");
  const drinksArr = drinksData.drinks;
  let drinksArrCopy = [...drinksArr];
  
  for(let i = 0; i < 8; i++){
  let idx = Math.floor(Math.random() * drinksArrCopy.length)
  const divCard = document.createElement('div');
  
        const titleDrink = document.createElement("p");
        const imageDrink = document.createElement("img");
        const isAlcoholic = document.createElement("p");
        const instructions = document.createElement("p");
        const need = document.createElement("p");
        const buttonSave = document.createElement("button");
  
        titleDrink.setAttribute('id', `titleDrink${i}`);
        imageDrink.setAttribute('id', `imageDrink${i}`);
        isAlcoholic.setAttribute('id', `isAlcoholic${i}`);
        instructions.setAttribute('id', `instructions${i}`);
        need.setAttribute('id', `need${i}`);
        buttonSave.setAttribute('type', "button");
  
        divCard.classList.add("bg-black");
        titleDrink.classList.add('py-4', 'border-t', 'w-full', 'text-3xl');
        imageDrink.classList.add('py-4', 'px-5', 'h-auto', 'max-w-sm', 'm-auto');
        isAlcoholic.classList.add('py-4', 'text-left', 'm-10');
        instructions.classList.add('py-4', 'text-left', 'm-10');
        need.classList.add('flex', 'justify-center', 'items-center', 'p-4', 'md:p-5');
        buttonSave.classList.add("text-black", "mb-5", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");


        titleDrink.innerHTML = drinksArrCopy[idx].strDrink;
        imageDrink.src = drinksArrCopy[idx].strDrinkThumb;
        isAlcoholic.innerHTML = "Type: "+drinksArrCopy[idx].strAlcoholic;
        instructions.innerHTML = "Instructions: "+drinksArrCopy[idx].strInstructions;
        need.innerHTML = "One ingredient is: "+drinksArrCopy[idx].strIngredient1;
        buttonSave.innerHTML='<i class="fa-solid fa-bookmark"></i> Save Meal';
        drinksArrCopy.splice(idx, 1);
        
        divCard.appendChild(titleDrink);
        divCard.appendChild(imageDrink);
        divCard.appendChild(isAlcoholic);
        divCard.appendChild(instructions);
        divCard.appendChild(need);
        divCard.appendChild(buttonSave);
        drinksContainer.appendChild(divCard);

        // buttonSave.on('click',savingTheItem);
        
        document.getElementById('drinkSection').appendChild(drinksContainer);
}
}

//fetch the drinks by the user input
var searchDrink = function (){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ userInputDrink.value)
  .then(response => response.json())
  .then(data => {
    drinksContainer.innerHTML = "";
    for(var i=0; i<6; i++){
      // document.getElementById('titleDrink'+i).innerHTML = data['drinks'][i]['strDrink'];
      // document.getElementById('imageDrink'+i).src = data['drinks'][i]['strDrinkThumb'];
      // document.getElementById('isAlcoholic'+i).innerHTML = "Type: "+data['drinks'][i]['strAlcoholic'];
      // document.getElementById('instructions'+i).innerHTML = "Instructions: "+data['drinks'][i]['strInstructions'];
      // document.getElementById('need'+i).innerHTML = "One ingredient is: "+data['drinks'][i]['strIngredient1'];
      const divCard = document.createElement('div');
  
        const titleDrink = document.createElement("p");
        const imageDrink = document.createElement("img");
        const isAlcoholic = document.createElement("p");
        const instructions = document.createElement("p");
        const need = document.createElement("p");
        const buttonSave = document.createElement("button");
  
        titleDrink.setAttribute('id', `titleDrink${i}`);
        imageDrink.setAttribute('id', `imageDrink${i}`);
        isAlcoholic.setAttribute('id', `isAlcoholic${i}`);
        instructions.setAttribute('id', `instructions${i}`);
        need.setAttribute('id', `need${i}`);
        buttonSave.setAttribute('type', "button");
  
        divCard.classList.add("bg-black");
        titleDrink.classList.add('py-4', 'border-t', 'w-full', 'text-3xl');
        imageDrink.classList.add('py-4', 'px-5', 'h-auto', 'max-w-sm', 'm-auto');
        isAlcoholic.classList.add('py-4', 'text-left', 'm-10');
        instructions.classList.add('py-4', 'text-left', 'm-10');
        need.classList.add('flex', 'justify-center', 'items-center', 'p-4', 'md:p-5');
        buttonSave.classList.add("text-black", "mb-5", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");


        titleDrink.innerHTML = data['drinks'][i]['strDrink'];
        imageDrink.src = data['drinks'][i]['strDrinkThumb'];
        isAlcoholic.innerHTML = "Type: "+data['drinks'][i]['strAlcoholic'];
        instructions.innerHTML = "Instructions: "+data['drinks'][i]['strInstructions'];
        need.innerHTML = "One ingredient is: "+data['drinks'][i]['strIngredient1'];
        buttonSave.innerHTML='<i class="fa-solid fa-bookmark"></i> Save Meal';
        
        divCard.appendChild(titleDrink);
        divCard.appendChild(imageDrink);
        divCard.appendChild(isAlcoholic);
        divCard.appendChild(instructions);
        divCard.appendChild(need);
        divCard.appendChild(buttonSave);
        drinksContainer.appendChild(divCard);
        document.getElementById('drinkSection').appendChild(drinksContainer);
    }
  })
}

  // function to check the saved items
  var savedItems = function (){
    $('#savedItemsSection').removeClass("hidden");
    $('#foodSection').addClass("hidden");
    $('#drinkSection').addClass("hidden");
    $('#footer').removeClass("hidden");
  }
  
  // local storage for saved recipes
  listOfFood = JSON.parse(localStorage.getItem("food"));
  listOfDrinks = JSON.parse(localStorage.getItem("drinks"));
  window.localStorage.setItem("food", JSON.stringify(listOfFood));
  window.localStorage.setItem("drinks", JSON.stringify(listOfDrinks));

  //getting a random food and drink in the modal
  randomMeal.on('click',displayRandom);
  
  //eventlisteners for all the buttons
  foodBtn.on('click', randomFoodItems);
  foodSearchBtn.on('click',searchFood);
  drinkBtn.on('click', randomDrinkItems);
  drinkSearchBtn.on('click',searchDrink);
  savedRecipes.on('click', savedItems);