const searchBtn = document.getElementById('seach-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

//event listeners

searchBtn.addEventListener('click',getMealList);

//Getting Meal List Matching With Ingredients

function getMealList()
{
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch('www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}