//querySelectors
var inputClass = document.querySelector('.inputClass');
var button = document.querySelector('.buttonClass');
var container = document.querySelector('.container1');


button.addEventListener('click', function (name) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
    .then(result=>result.json())
    .then(data=>{
        let menu = data["meals"]
        menu.forEach(element=>{
            console.log(element["strMeal"])
       


        let result = `<div>
        <h1>${element["strMeal"]} </h1>
        <img src=${element["strMealThumb"]}>
        <p><span>Category</span> : ${element["strCategory"]}</p>
        <p><span>Origin</span> : ${element["strArea"]}</p>
        <p><span>Description</span> : ${element["strInstructions"]}</p>
        <p><a href=${element["strYoutube"]}>Watch Video</a></p>
        </div>`;

        container.innerHTML += result;
      });
    })
    .catch((err) => alert("error"));
});