# MixMingle

MixMingle is a cocktail-themed web application that allows users to search for and explore various cocktails. Users can input the name of a cocktail, and the application dynamically fetches data from an API to display the cocktail's name, photo, ingredients, and instructions. The interface includes a search bar, a button to trigger the search, and sections displaying the cocktail details, such as name, image, ingredients, and instructions.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

HTML: The HTML structure includes essential elements like headings, input fields, buttons, and placeholders for displaying cocktail details such as name, image, ingredients, and instructions.

CSS (normalize.css and main.css):
normalize.css is used to ensure consistent rendering across different browsers by resetting default styles.
main.css includes styles for layout, additional elements, and specific adjustments, such as setting box-sizing globally, styling images, hiding empty list items, and arranging ingredient lists.

JavaScript (main.js):
The JavaScript file is responsible for handling user interactions and fetching data from the cocktail API.
An event listener is attached to the search button, triggering the getDrink function.
The getDrink function retrieves user input, constructs the API URL using a template literal, and fetches data.
The fetched data is then used to dynamically update the DOM elements, creating a slideshow effect that cycles through different cocktails' details.
Interval-based functions are used to automatically advance through the slideshow every 2 seconds.
The application also includes commented-out code for implementing previous and next buttons, allowing manual navigation through the cocktail slideshow.

## Future Optimizations

  1. Implementing a more user-friendly navigation system, including next and previous buttons for manual control.
  2. Enhancing the visual design for a more appealing and engaging user experience.
  3. Adding error handling for cases where the API request fails or returns no data.

## Lessons Learned:

Through this project, I gained experience working with APIs, dynamically updating the DOM based on user input, and creating a slideshow effect using JavaScript intervals. Understanding how to structure the HTML for a dynamic display and optimizing CSS for better visuals were valuable lessons.
