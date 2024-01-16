// Imported a localStorage of drinks
import drinksData from "./drinksjson.json" assert { type: 'json' };

// Linked the elements from the HTML to JS
var userInputFood = document.querySelector('#searchInputFood');
var userInputDrink = document.querySelector('#searchInputDrink');
var randomMeal = document.querySelector('#randomMeal');
var foodBtn =document.querySelector('#foodRecipes');
var drinkBtn = document.querySelector('#drinkRecipes');
var savedRecipes = document.querySelector('#savedRecipes');
var foodSearchBtn = document.querySelector('#foodSearch');
var drinkSearchBtn = document.querySelector('#drinkSearch');

// Linked the sections to JS
var foodSection = document.querySelector('#foodSection');
var drinkSection = document.querySelector('#drinkSection');
var footer = document.getElementById('footer');
var savedItemsSection = document.querySelector('#savedItemsSection');
var spaceForSavedItems = document.querySelector('#spaceForSavedItems');

// Made the arrays to save items
let listOfFood = [];
let listOfDrinks = [];

// Created some variables
const foodContainer = document.querySelector('#spaceForFood');
const drinksContainer = document.createElement("div");
drinksContainer.setAttribute('id', 'spaceForDrinks');
drinksContainer.classList.add('m-10', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4', 'gap-4', 'text-white');

// Making all the sections hidden
foodSection.setAttribute("hidden","hidden");
drinkSection.setAttribute("hidden","hidden");
savedItemsSection.setAttribute("hidden","hidden");
footer.setAttribute("hidden","hidden");

// Function to save items:
// Function to save drinks
  const localStorageDrinks = function (title, type, img, info) {
    listOfDrinks = JSON.parse(localStorage.getItem("drinks"));
    if(!listOfDrinks){
      listOfDrinks = [{
        "title":title,
        "type":type, 
        "img":img, 
        "info":info
      }];
    }else{
      listOfDrinks.push({
        "title":title,
        "type":type, 
        "img":img, 
        "info":info
      });
    }
    window.localStorage.setItem("drinks", JSON.stringify(listOfDrinks));
    return listOfDrinks
  }
//Function to save food
  const localStorageFood = function (title, type, img, info, link) {
    listOfFood = JSON.parse(localStorage.getItem("food"));
    if(!listOfFood){
      listOfFood = [{
        "title":title,
        "type":type, 
        "img":img, 
        "info":info,
        "link":link
      }];
    }else{
      listOfFood.push({
        "title":title,
        "type":type, 
        "img":img, 
        "info":info,
        "link":link
      });
    }
    window.localStorage.setItem("food", JSON.stringify(listOfFood));
    return listOfFood
  }


// This functions display a random meal and drink in the modal
function displayRandom() {
  //This displays the random drink
  const drinkContainerRandom = document.getElementById('drinkContainerRandom');
  drinkContainerRandom.innerHTML = "";
  const foodContainerRandom = document.getElementById('foodContainerRandom');
  foodContainerRandom.innerHTML = "";
  const drinksArr = drinksData.drinks;
  let idx = 0;
  idx = Math.floor(Math.random() * drinksArr.length);

  const titleDrink = document.createElement("p");
  const imageDrink = document.createElement("img");
  const isAlcoholic = document.createElement("p");
  const instructions = document.createElement("p");
  const need = document.createElement("p");
  const buttonSave = document.createElement("button");

  titleDrink.setAttribute('id', `drinkTitle`);
  imageDrink.setAttribute('id', `drinkImage`);
  isAlcoholic.setAttribute('id', `drinkAlc`);
  instructions.setAttribute('id', `instructions`);
  need.setAttribute('id', `need`);
  buttonSave.setAttribute('type', "button");

  titleDrink.classList.add('py-4', 'border-t', 'w-full', 'text-3xl', 'min-h-100');
  imageDrink.classList.add('py-4', 'px-5', 'object-contain', 'max-h-sm', 'max-w-sm', 'm-auto');
  isAlcoholic.classList.add('py-4', 'text-left', 'm-2');
  instructions.classList.add('py-4', 'text-left', 'm-2');
  need.classList.add('flex', 'justify-center', 'items-center', 'p-4', 'md:p-5');
  buttonSave.classList.add("text-black", "mb-5", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");

  titleDrink.innerHTML = drinksArr[idx].strDrink;
  imageDrink.src = drinksArr[idx].strDrinkThumb;
  isAlcoholic.innerHTML = "Type: "+drinksArr[idx].strAlcoholic;
  instructions.innerHTML = "Instructions: "+drinksArr[idx].strInstructions;
  need.innerHTML = "One ingredient is: "+drinksArr[idx].strIngredient1;
  buttonSave.innerHTML = '<i class="fa-solid fa-bookmark"></i>  Save drink';
  
  drinkContainerRandom.appendChild(titleDrink);
  drinkContainerRandom.appendChild(imageDrink);
  drinkContainerRandom.appendChild(isAlcoholic);
  drinkContainerRandom.appendChild(instructions);
  drinkContainerRandom.appendChild(need);
  drinkContainerRandom.appendChild(buttonSave);
  buttonSave.addEventListener('click', () =>{
    localStorageDrinks(titleDrink.innerHTML,drinkAlc.innerHTML,drinkImage.src,instructions.innerHTML)
  });

  // This displays the random food
  fetch('https://api.spoonacular.com/recipes/random?number=6&apiKey=c37a2563cdea4ca5ba1ce4b60bd9d8a7')
  .then(response => response.json())
  .then(data => {
    const modalTitle = document.createElement("p");
    const modalPic = document.createElement("img");
    const modalTime = document.createElement("p");
    const modalServing = document.createElement("p");
    const modalDairy = document.createElement("p");
    const modalGluten = document.createElement("p");
    const modalData = document.createElement("a");
    const buttonSaveModal = document.createElement("button");
    const buttonLookUpRecipe = document.createElement("button");
    const buttonContainerFood = document.createElement("div");

    modalTitle.setAttribute('id', `modalTitle`);
    modalPic.setAttribute('id', `modalPic`);
    modalTime.setAttribute('id', `modalTime`);
    modalServing.setAttribute('id', `modalServing`);
    modalDairy.setAttribute('id', `modalDairy`);
    modalGluten.setAttribute('id', "modalGluten");
    modalData.setAttribute('id', "modalData");
    buttonSaveModal.setAttribute('id', "buttonSaveModal");
  
    modalTitle.classList.add('py-4', 'border-t', 'w-full', 'text-3xl', 'min-h-24');
    modalPic.classList.add('py-4', 'px-5', 'object-contain', 'h-auto', 'max-w-sm', 'm-auto');
    modalTime.classList.add('py-4', 'text-left', 'm-2');
    modalServing.classList.add('py-4', 'text-left', 'm-2');
    modalDairy.classList.add('py-4', 'text-left', 'm-2');
    modalGluten.classList.add('py-4', 'text-left', 'm-2');
    modalData.classList.add('py-4', 'text-left', 'm-2');
    buttonLookUpRecipe.classList.add("text-black", 'ml-10', "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");
    buttonSaveModal.classList.add("text-black", 'm-2', "ml-5","p-1","bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");
    // buttonContainerFood.classList.add("flex","justify-around")
  
    modalTitle.innerHTML = data['recipes'][0]['title'];
    modalPic.src = data['recipes'][0]['image'];
    modalTime.innerHTML = "ReadyInMinutes: " + data['recipes'][0]['readyInMinutes'];
    modalServing.innerHTML = "Servings: "+data['recipes'][0]['servings'];
    modalDairy.innerHTML = "DairyFree: "+data['recipes'][0]['dairyFree'];
    modalGluten.innerHTML = "GlutenFree: "+data['recipes'][0]['glutenFree'];
    modalData.href=data['recipes'][0]['sourceUrl'] ;
    buttonLookUpRecipe.innerHTML = '<i class="fa-solid fa-check-to-slot"></i> Search Recipe';
    buttonSaveModal.innerHTML = '<i class="fa-solid fa-bookmark"></i> Save Meal';

    modalData.appendChild(buttonLookUpRecipe);
    buttonContainerFood.appendChild(modalData);
    buttonContainerFood.appendChild(buttonSaveModal);
    foodContainerRandom.appendChild(modalTitle);
    foodContainerRandom.appendChild(modalPic);
    foodContainerRandom.appendChild(modalTime);
    foodContainerRandom.appendChild(modalServing);
    foodContainerRandom.appendChild(modalDairy);
    foodContainerRandom.appendChild(modalGluten);
    foodContainerRandom.appendChild(buttonContainerFood);

    buttonSaveModal.addEventListener('click', () =>{
    localStorageFood(modalTitle.innerHTML, modalServing.innerHTML, modalPic.src, modalServing.innerHTML);
    
  });
  })
}

// Fetch 6 random food items
var randomFoodItems = function (){
  foodContainer.innerHTML = "";
  savedItemsSection.setAttribute("hidden","hidden");
  drinkSection.setAttribute("hidden","hidden");
  foodSection.removeAttribute("hidden","hidden");
  footer.removeAttribute("hidden","hidden");
  fetch('https://api.spoonacular.com/recipes/random?number=6&apiKey=c37a2563cdea4ca5ba1ce4b60bd9d8a7')
  .then(response => response.json())
  .then(data => {
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
      titleFood.classList.add('border-t', 'w-full', 'text-3xl', 'min-h-7', 'py-4', 'px-4');
      image.classList.add('px-5', 'h-auto', 'object-contain', 'max-w-sm', 'm-auto');
      ready.classList.add('text-left', 'm-5');
      servings.classList.add('text-left', 'm-5');
      dairy.classList.add('text-left', 'm-5');
      gluten.classList.add('text-left', 'm-5');
      buttonContainer.classList.add('flex', 'justify-center', 'items-center', 'p-4', 'md:p-5');
      buttonRecipe.classList.add("mb-4","text-black", "mr-3", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");
      buttonSave.classList.add("mb-4","text-black", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");

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
      buttonSave.addEventListener('click', () =>{localStorageFood(titleFood.innerHTML, ready.innerHTML, image.src, servings.innerHTML, linkRecipe.href)});
      foodContainer.appendChild(divCard);  
    }
    }
  )
}

// Fetch the food items by the user input
var searchFood = function (){
  foodContainer.innerHTML = "";
  fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=c37a2563cdea4ca5ba1ce4b60bd9d8a7&query=' + userInputFood.value + '&addRecipeInformation=true')
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
      titleFood.classList.add('border-t', 'w-full', 'text-3xl');
      image.classList.add('px-5', 'h-auto', 'object-contain', 'max-w-sm', 'm-auto');
      ready.classList.add('text-left', 'm-10');
      servings.classList.add('text-left', 'm-10');
      dairy.classList.add('text-left', 'm-10');
      gluten.classList.add('text-left', 'm-10');
      buttonContainer.classList.add('flex', 'justify-center', 'items-center', 'p-4', 'md:p-5');
      buttonRecipe.classList.add("text-black", "mr-3", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");
      buttonSave.classList.add("mb-4","text-black", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");

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

      buttonSave.addEventListener('click', () =>{localStorageFood(titleFood.innerHTML, ready.innerHTML, image.src, servings.innerHTML, linkRecipe.href)});
      foodContainer.appendChild(divCard);  
    }
  })
}

// Fetch the 6 random drinks
var randomDrinkItems = function (){
  drinksContainer.innerHTML = "";
  foodSection.setAttribute("hidden","hidden");
  savedItemsSection.setAttribute("hidden","hidden");
  drinkSection.removeAttribute("hidden","hidden");
  footer.removeAttribute("hidden","hidden");
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
        const buttonDelete = document.createElement("button");
  
        titleDrink.setAttribute('id', `titleDrink${i}`);
        imageDrink.setAttribute('id', `imageDrink${i}`);
        isAlcoholic.setAttribute('id', `isAlcoholic${i}`);
        instructions.setAttribute('id', `instructions${i}`);
        need.setAttribute('id', `need${i}`);
        buttonSave.setAttribute('type', "button");
        buttonDelete.setAttribute('type', "button");
  
        divCard.classList.add("bg-black");
        titleDrink.classList.add('py-4', 'border-t', 'w-full', 'text-3xl');
        imageDrink.classList.add('py-4', 'px-5', 'object-contain', 'h-auto', 'max-w-sm', 'm-auto');
        isAlcoholic.classList.add('py-4', 'text-left', 'm-10');
        instructions.classList.add('py-4', 'text-left', 'm-10');
        need.classList.add('flex', 'justify-center', 'items-center', 'p-4', 'md:p-5');
        buttonSave.classList.add("text-black", "mb-5", "pb-5", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");
        buttonDelete.classList.add("text-black", "mb-5", "pb-5", "bg-white","hover:bg-red-800","focus:ring-4","focus:outline-none","focus:ring-red-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-red-700", "dark:focus:ring-red-800");

        titleDrink.innerHTML = drinksArrCopy[idx].strDrink;
        imageDrink.src = drinksArrCopy[idx].strDrinkThumb;
        isAlcoholic.innerHTML = "Type: "+drinksArrCopy[idx].strAlcoholic;
        instructions.innerHTML = "Instructions: "+drinksArrCopy[idx].strInstructions;
        need.innerHTML = "One ingredient is: "+drinksArrCopy[idx].strIngredient1;
        buttonSave.innerHTML='<i class="fa-solid fa-bookmark"></i> Save drink';
        buttonDelete.innerHTML='<i class="fa-solid fa-circle-xmark"></i> Delete';

        drinksArrCopy.splice(idx, 1);
        
        divCard.appendChild(titleDrink);
        divCard.appendChild(imageDrink);
        divCard.appendChild(isAlcoholic);
        divCard.appendChild(instructions);
        divCard.appendChild(need);
        divCard.appendChild(buttonSave);
        drinksContainer.appendChild(divCard);
        
        buttonSave.addEventListener('click', () =>{
          localStorageDrinks(titleDrink.innerHTML,isAlcoholic.innerHTML,imageDrink.src,instructions.innerHTML)
          buttonSave.remove();
          divCard.appendChild(buttonDelete);
        });
        buttonDelete.addEventListener('click', () =>{
          listOfDrinks = JSON.parse(localStorage.getItem("drinks"));
          listOfDrinks.pop();
          window.localStorage.setItem("drinks", JSON.stringify(listOfDrinks));
          buttonDelete.remove();
          divCard.appendChild(buttonSave);
        });
        document.getElementById('drinkSection').appendChild(drinksContainer);
}
}

// Fetch the drinks by the user input
var searchDrink = function (){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ userInputDrink.value)
  .then(response => response.json())
  .then(data => {
    drinksContainer.innerHTML = "";
    for(var i=0; i<6; i++){
        const divCard = document.createElement('div');
        const titleDrink = document.createElement("p");
        const imageDrink = document.createElement("img");
        const isAlcoholic = document.createElement("p");
        const instructions = document.createElement("p");
        const need = document.createElement("p");
        const buttonSave = document.createElement("button");
        const buttonDelete = document.createElement("button");
  
        titleDrink.setAttribute('id', `titleDrink${i}`);
        imageDrink.setAttribute('id', `imageDrink${i}`);
        isAlcoholic.setAttribute('id', `isAlcoholic${i}`);
        instructions.setAttribute('id', `instructions${i}`);
        need.setAttribute('id', `need${i}`);
        buttonSave.setAttribute('type', "button");
        buttonDelete.setAttribute('type', "button");
  
        divCard.classList.add("bg-black");
        titleDrink.classList.add('py-4', 'border-t', 'w-full', 'text-3xl');
        imageDrink.classList.add('py-4', 'px-5', 'object-contain', 'h-auto', 'max-w-sm', 'm-auto');
        isAlcoholic.classList.add('py-4', 'text-left', 'm-10');
        instructions.classList.add('py-4', 'text-left', 'm-10');
        need.classList.add('flex', 'justify-center', 'items-center', 'p-4', 'md:p-5');
        buttonSave.classList.add("text-black", "mb-5", "bg-white","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-blue-700", "dark:focus:ring-blue-800");
        buttonDelete.classList.add("text-black", "mb-5", "pb-5", "bg-white","hover:bg-red-800","focus:ring-4","focus:outline-none","focus:ring-red-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-red-700", "dark:focus:ring-red-800");

        titleDrink.innerHTML = data['drinks'][i]['strDrink'];
        imageDrink.src = data['drinks'][i]['strDrinkThumb'];
        isAlcoholic.innerHTML = "Type: "+data['drinks'][i]['strAlcoholic'];
        instructions.innerHTML = "Instructions: "+data['drinks'][i]['strInstructions'];
        need.innerHTML = "One ingredient is: "+data['drinks'][i]['strIngredient1'];
        buttonSave.innerHTML='<i class="fa-solid fa-bookmark"></i> Save Meal';
        buttonDelete.innerHTML='<i class="fa-solid fa-circle-xmark"></i> Delete';

        divCard.appendChild(titleDrink);
        divCard.appendChild(imageDrink);
        divCard.appendChild(isAlcoholic);
        divCard.appendChild(instructions);
        divCard.appendChild(need);
        divCard.appendChild(buttonSave);
        drinksContainer.appendChild(divCard);

        buttonSave.addEventListener('click', () =>{localStorageDrinks(titleDrink.innerHTML,isAlcoholic.innerHTML,imageDrink.src,instructions.innerHTML)
          buttonSave.remove();
          divCard.appendChild(buttonDelete);
        });
          buttonDelete.addEventListener('click', () =>{
            listOfDrinks = JSON.parse(localStorage.getItem("drinks"));
            listOfDrinks.pop();
            window.localStorage.setItem("drinks", JSON.stringify(listOfDrinks));
            buttonDelete.remove();
            divCard.appendChild(buttonSave);
          });
        document.getElementById('drinkSection').appendChild(drinksContainer);
    }
  })
}

  // Function to see the saved items
  var savedItems = function (){
    spaceForSavedItems.innerHTML = "";
    foodSection.setAttribute("hidden","hidden");
    drinkSection.setAttribute("hidden","hidden");
    savedItemsSection.removeAttribute("hidden","hidden");
    footer.removeAttribute("hidden","hidden");
    listOfFood = JSON.parse(localStorage.getItem("food"));
    listOfDrinks = JSON.parse(localStorage.getItem("drinks"));
    let countDrinks =listOfDrinks?listOfDrinks.length:0;
    let countFood =listOfFood?listOfFood.length:0;
    for(let i = 0; i < countDrinks; i++){
      const divCard = document.createElement("div");
      const titleDrink = document.createElement("p");
      const imageDrink = document.createElement("img");
      const isAlcoholic = document.createElement("p");
      const instructions = document.createElement("p");
      const buttonDelete = document.createElement("button");
      
      titleDrink.setAttribute('id', `titleDrink${i}`);
      imageDrink.setAttribute('id', `imageDrink${i}`);
      isAlcoholic.setAttribute('id', `isAlcoholic${i}`);
      instructions.setAttribute('id', `instructions${i}`);
      buttonDelete.setAttribute('type', "button");

      divCard.classList.add("bg-black", "py-4");
      titleDrink.classList.add('py-4', 'border-t', 'w-full', 'text-3xl');
      imageDrink.classList.add('py-4', 'px-5', 'object-contain', 'h-auto', 'max-w-sm', 'm-auto');
      isAlcoholic.classList.add('py-4','text-left', 'px-4','m-4');
      instructions.classList.add('py-4','text-left', 'px-4', 'm-4');
      buttonDelete.classList.add("text-black", "mb-5", "bg-white","hover:bg-red-800","focus:ring-4","focus:outline-none","focus:ring-red-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-red-700", "dark:focus:ring-red-800");

      titleDrink.innerHTML = listOfDrinks[i].title;
      imageDrink.src = listOfDrinks[i].img;
      isAlcoholic.innerHTML = listOfDrinks[i].type;
      instructions.innerHTML = listOfDrinks[i].info;
      buttonDelete.innerHTML='<i class="fa-solid fa-circle-xmark"></i> Delete';
      
      divCard.appendChild(titleDrink);
      divCard.appendChild(imageDrink);
      divCard.appendChild(isAlcoholic);
      divCard.appendChild(instructions);
      divCard.appendChild(buttonDelete);

      buttonDelete.addEventListener('click', () =>{
        listOfDrinks.splice(i,1);
        window.localStorage.setItem("drinks", JSON.stringify(listOfDrinks));
        savedItems();
      });
      
      spaceForSavedItems.appendChild(divCard);
    }
    for(let i = 0; i < countFood; i++){
      const divCard = document.createElement("div");
      const titleDrink = document.createElement("p");
      const imageDrink = document.createElement("img");
      const isAlcoholic = document.createElement("p");
      const instructions = document.createElement("p");
      const buttonDelete = document.createElement("button");
      
      titleDrink.setAttribute('id', `titleDrink${i}`);
      imageDrink.setAttribute('id', `imageDrink${i}`);
      isAlcoholic.setAttribute('id', `isAlcoholic${i}`);
      instructions.setAttribute('id', `instructions${i}`);

      buttonDelete.setAttribute('type', "button");

      divCard.classList.add("bg-black");
      titleDrink.classList.add('py-4', 'border-t', 'w-full', 'text-3xl');
      imageDrink.classList.add('py-4', 'px-5', 'object-contain', 'h-auto', 'max-w-sm', 'm-auto');
      isAlcoholic.classList.add('text-left', 'm-5');
      instructions.classList.add('text-left', 'm-5');
      buttonDelete.classList.add("text-black", "mb-5", "bg-white","hover:bg-red-800","focus:ring-4","focus:outline-none","focus:ring-red-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:hover:bg-red-700", "dark:focus:ring-red-800");

      titleDrink.innerHTML = listOfFood[i].title;
      imageDrink.src = listOfFood[i].img;
      isAlcoholic.innerHTML = listOfFood[i].type;
      instructions.innerHTML = listOfFood[i].info;
      buttonDelete.innerHTML='<i class="fa-solid fa-bookmark"></i> Delete';
      
      divCard.appendChild(titleDrink);
      divCard.appendChild(imageDrink);
      divCard.appendChild(isAlcoholic);
      divCard.appendChild(instructions);
      divCard.appendChild(buttonDelete);

      buttonDelete.addEventListener('click', () =>{
        listOfFood.splice(i,1);
        window.localStorage.setItem("food", JSON.stringify(listOfFood));
        savedItems();
      });
      spaceForSavedItems.appendChild(divCard);
    }
  }

  //getting a random food and drink in the modal
  randomMeal.addEventListener('click',displayRandom);
  
  //eventlisteners for all the buttons
  foodBtn.addEventListener('click', randomFoodItems);
  foodSearchBtn.addEventListener('click',searchFood);
  drinkBtn.addEventListener('click', randomDrinkItems);
  drinkSearchBtn.addEventListener('click',searchDrink);
  savedRecipes.addEventListener('click', savedItems);

  