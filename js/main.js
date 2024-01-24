//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//go to the dom, select element w/ search as the id attribute value and add an event listener that will hear a click then calls a function called getDrink()
document.querySelector('#search').addEventListener('click', getDrink);
//function getDrink is hoisted and not part of the normal top down flow of the doc; can be called from anywhere in the program; no parameters are set
function getDrink(){
  //declares variable drink and assigns it to the value of looking at the document, selecting the element input and retrieving its inputted value
    let drink = document.querySelector('input').value;
    //declares a const value and assigns it to the url of the api using a template literal to interpolate the drink input
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    //fetch function with a url as a parameter
    fetch(url)
        .then(res => res.json()) // parse response as JSON or js object
        .then(data => {
      let i = 0;
          setInterval(() => {
            // Set the slide stuff here with document.querySelectors
            //carousel that moves on its own through all the drinks using interval
          document.querySelector('h2').innerText = data.drinks[i].strDrink;
          document.querySelector('img').src = data.drinks[i].strDrinkThumb;
          document.querySelector('p').innerText = data.drinks[i].strInstructions;
            
        document.querySelector('#Ingredient1').innerText = data.drinks[i].strIngredient1;
        document.querySelector('#Ingredient2').innerText = data.drinks[i].strIngredient2;
        document.querySelector('#Ingredient3').innerText = data.drinks[i].strIngredient3;
        document.querySelector('#Ingredient4').innerText = data.drinks[i].strIngredient4;
        document.querySelector('#Ingredient5').innerText = data.drinks[i].strIngredient5;
        document.querySelector('#Ingredient6').innerText = data.drinks[i].strIngredient6;
        document.querySelector('#Ingredient7').innerText = data.drinks[i].strIngredient7;
        document.querySelector('#Ingredient8').innerText = data.drinks[i].strIngredient8;
        document.querySelector('#Ingredient9').innerText = data.drinks[i].strIngredient9;
        document.querySelector('#Ingredient10').innerText = data.drinks[i].strIngredient10;
        document.querySelector('#Ingredient11').innerText = data.drinks[i].strIngredient11;
        document.querySelector('#Ingredient12').innerText = data.drinks[i].strIngredient12;
        document.querySelector('#Ingredient13').innerText = data.drinks[i].strIngredient13;
        document.querySelector('#Ingredient14').innerText = data.drinks[i].strIngredient14;
        document.querySelector('#Ingredient15').innerText = data.drinks[i].strIngredient15;
        

        document.querySelector('#Measure1').innerText = data.drinks[i].strMeasure1;
        document.querySelector('#Measure2').innerText = data.drinks[i].strMeasure2;
        document.querySelector('#Measure3').innerText = data.drinks[i].strMeasure3;
        document.querySelector('#Measure4').innerText = data.drinks[i].strMeasure4;
        document.querySelector('#Measure5').innerText = data.drinks[i].strMeasure5;
        document.querySelector('#Measure6').innerText = data.drinks[i].strMeasure6;
        document.querySelector('#Measure7').innerText = data.drinks[i].strMeasure7;
        document.querySelector('#Measure8').innerText = data.drinks[i].strMeasure8;
        document.querySelector('#Measure9').innerText = data.drinks[i].strMeasure9;
        document.querySelector('#Measure10').innerText = data.drinks[i].strMeasure10;
        document.querySelector('#Measure11').innerText = data.drinks[i].strMeasure11;
        document.querySelector('#Measure12').innerText = data.drinks[i].strMeasure12;
        document.querySelector('#Measure13').innerText = data.drinks[i].strMeasure13;
        document.querySelector('#Measure14').innerText = data.drinks[i].strMeasure14;
        document.querySelector('#Measure15').innerText = data.drinks[i].strMeasure15;


            
          i = i === data.drinks.length-1 ? 0 : i+1;
          }, 2000);
          console.log(data.drinks);
          const intervalId = setInterval(() => {}, 2000);

          // Now inside your request .then, before creating a new interval, do:
          clearInterval(intervalId);
          
        
        
        //when user hits prev button
      /*
        document.querySelector('#prev').addEventListener('click', getPrevDrink);
        function getPrevDrink(){
          //clearInterval(intervalId);
          
          i = i === data.drinks.length-1 ? 0 : i-1;
          
          if(drinkIndex>0){
            i--
            document.querySelector('img').src = data.drinks[i].strDrinkThumb;
            document.querySelector('h2').innerText = data.drinks[i].strDrink
            document.querySelector('h3').innerText = data.drinks[i].strInstructions
            
          }else if(i == 0){
            document.querySelector('img').src = data.drinks[data.drinks.length-1].strDrinkThumb;
            document.querySelector('h2').innerText = data.drinks[data.drinks.length-1].strDrink
            document.querySelector('h3').innerText = data.drinks[data.drinks.length-1].strInstructions
            .then(() => i++)
          }
          
        }
        //when user hits next button
        document.querySelector('#next').addEventListener('click', getNextDrink);
        function getNextDrink(){
          //clearInterval(intervalId);
          
          i = i === data.drinks.length-1 ? 0 : i+1;
          /*
          if(i < data.drinks.length-1){
            i++
            document.querySelector('img').src = data.drinks[i].strDrinkThumb;
            document.querySelector('h2').innerText = data.drinks[i].strDrink
            document.querySelector('h3').innerText = data.drinks[i].strInstructions
          }else if(i == data.drinks.length-1){
            document.querySelector('img').src = data.drinks[0].strDrinkThumb;
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
            .then(() => i--)
          }
        
      }*/
              })
        .catch(err => {
            console.log(`error ${err}`)
        });

}